import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSinglePokemon } from './services/fetch-utils';
import { useParams } from 'react-router-dom';

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    async function fetch() {
      const pokemonData = await getSinglePokemon(params.id);
      console.log(pokemon);

      setPokemon(pokemonData);
    }

    fetch();
  }, [params.id]);

  return (
    <>
      <Link to="/">Home</Link>
      <div className="pokemon-detail">
        <div className="pokemon-data">
          <p>Name: {pokemon.name}</p>
          <p>Type 1: {pokemon.type1}</p>
          <p>Type 2: {pokemon.type2}</p>
          <p>HP: {pokemon.hp}</p>
          <p>Attack: {pokemon.attack}</p>
          <p>Defense: {pokemon.defense}</p>
        </div>
      </div>
    </>
  );
}
