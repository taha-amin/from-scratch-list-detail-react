import { useEffect, useState } from 'react';
import './App.css';
import { getPokemon } from './services/fetch-utils';
import PokemonList from './PokemonList';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 20;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const pokemons = await getPokemon(from, to);

      setPokemons(pokemons);
    }

    fetch();
  }, [page]);

  return (
    <>
      <h2>Current Page {page}</h2>
      <div className="buttons">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Previous Page
        </button>

        <button onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
      <PokemonList pokemons={pokemons} />
    </>
  );
}

export default App;
