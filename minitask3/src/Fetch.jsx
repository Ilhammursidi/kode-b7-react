import { useEffect } from "react";


function Fetch({ setPokemon }) {

    useEffect(()=>{
    (async function GetChar() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=30")
        if(!response.ok) throw new Error("Fetch failed",`${response.status}`)
        const data = await response.json()
        setPokemon(data.results)
      } catch (error) {
        console.log(error)
      }
    })();
  },[setPokemon])

return;

}

export default Fetch;