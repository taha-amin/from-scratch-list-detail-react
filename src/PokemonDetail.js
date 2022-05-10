import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getSinglePokemon } from './services/fetch-utils';

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState([]);

  const match = useRouteMatch();

  useEffect(() => {
    async function fetch() {
      const pokemon = await getSinglePokemon(match.params.id);

      setPokemon(pokemon);
    }

    fetch();
  }, [match.params.id]);
}

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
