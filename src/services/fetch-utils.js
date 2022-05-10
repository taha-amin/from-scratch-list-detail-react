import { client, checkError } from './client';

export async function getPokemon(from = 0, to = 30) {
  const response = await client.from('pokemons').select().range(from, to);

  return checkError(response);
}

export async function getSinglePokemon(id) {
  const response = await client.from('pokemons').select().match({ Id }).single();

  return checkError(response);
}
