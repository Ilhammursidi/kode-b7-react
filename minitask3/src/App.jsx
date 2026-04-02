import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
      const data = await res.json();

      const detailPromises = data.results.map(async (item) => {
        const resDetail = await fetch(item.url);
        const detail = await resDetail.json();

        return {
          name: detail.name,
          image: detail.sprites.front_default,
          types: detail.types.map((t) => t.type.name),
        };
      });

      const results = await Promise.all(detailPromises);
      setPokemon(results);
    };

    fetchData();
  }, []);

  const filteredPokemon = pokemon.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <section>
      <section className="flex flex-row m-10 gap-2">
      <label htmlFor="search">Search Pokemon :</label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        </section>

      <section className="grid grid-cols-4 gap-10">
        {filteredPokemon.map((item) => (
          <section
            key={item.name}
            className="border rounded-xl text-center h-50">
            <img className="m-auto" src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <section className="mt-4">
              {item.types.map((type) => (
                <span
                  key={type}
                  className="m-4 rounded-md border p-1">
                  {type}
                </span>
              ))}
            </section>
          </section>
        ))}
      </section>
    </section>
  );
}

export default App;