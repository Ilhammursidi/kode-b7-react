import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useFetch } from "../hooks/useFetch";

function RickMortyTwo() {
  const url = "https://rickandmortyapi.com/api/character"
  const {dataFetch,isLoading,isError} = useFetch(url)

  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>Error: {isError}</p>

  return (
    <section>
        <Header></Header>
        {dataFetch.map((results) => (
          <section key={results.name}>
            <p>{results.name}</p>
            <img src={results.image} alt="" />
          </section>
        ))}
      <Footer></Footer>
    </section>
  );
}

export default RickMortyTwo;