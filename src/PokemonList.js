import Pokemon from './Pokemon.js';

export default function PokemonList({ pokemons }) {
  return (
    <div className="pokemons">
      {pokemons.map((pokemon) => (
        <Pokemon key={`${pokemon.id}${pokemon.name}`} pokemon={pokemon} />
      ))}
    </div>
  );
}
