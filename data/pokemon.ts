import { cache } from "react";

export const getAllpokemon = cache(async () => {
  const maxpokemons = 151;

  return Promise.all(
    [...Array(maxpokemons)].map(async (_, index) => {
      const pokemons = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${index + 1}`,
        { method: "GET" }
      ).then((res) => {
        return res.json();
      });
      return pokemons;
    })
  );
});

export const getpokemon = async (id: string) => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    (res) => {
      return res.json();
    }
  );
  return pokemon;
};
