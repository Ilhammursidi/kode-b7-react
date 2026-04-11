import { useParams } from "react-router";
import { useState,useEffect } from "react";

export const DetailCharacter = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null)
    const url = "https://rickandmortyapi.com/api/character"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`${url}/${id}`)
                const data = await res.json();
            
                
                setCharacter(data)
            } catch (error) {
                throw new Error(error)
            }
        }
        fetchData();
    },[id]);

    return (
        <section className="p-10 border m-10 rounded flex flex-row gap-10">
            <img src={character?.image} alt="" />
            
            <section className="flex flex-col justify-between">
            <p className="text-4xl">Name : {character?.name}</p>
            <p className="text-4xl">Gender : {character?.gender}</p>
            <p className="text-4xl">Species : {character?.species}</p>
            <p{...(character?.status === "Alive" ? {className: "text-4xl text-green-600"} : {className: "text-4xl text-red-600"})}>Status : {character?.status}</p>
            </section>
        </section>
        
        
    )
};