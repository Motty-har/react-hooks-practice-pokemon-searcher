import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(data => setPokemon(data))
  }, [])
  function handleSearch(event){
    setSearch(event.target.value)
    const searched = pokemon.filter((poke) => {
      return poke.name.includes(search)
    })
    setPokemon(searched)
  }
  function updatePokemon(newPokemon) {
    setPokemon([...pokemon, newPokemon]);
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm updatePokemon={updatePokemon}/>
      <br />
      <Search search={search} handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemon={pokemon}/>
    </Container>
  );
}

export default PokemonPage;
