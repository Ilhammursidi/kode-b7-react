import { useState,useEffect } from "react";
import slugify from "slugify"
import { useNavigate } from "react-router";

export const ListRickMorty = () => {
    const [characters, setCharacters] = useState([]);
    const url = "https://rickandmortyapi.com/api/character"
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json();
                const result = data.results
                
                console.log(result)
                setCharacters(result)
            } catch (error) {
                throw new Error(error)
            }
        }
        fetchData();
    }, []);

    const goDetail = (item) => {
        const slug = slugify(item.name,{ lower : true});
        navigate(`${item.id}/${slug}`)
    }

    return (
        <section className=" h-full grid grid-cols-4 gap-5 p-5">
            {characters.length && 
                characters.map((item) => (
                    <section onClick={() => goDetail(item)} key={item.name} className="flex items-center border shadow rounded gap-2 border-blue-600 p-1">
                        <img className="w-15" src={item.image} alt={item.name} />
                            <p className="font-bold">{item.name}</p>
                    </section>
                ))
            }
        </section>
    )
}