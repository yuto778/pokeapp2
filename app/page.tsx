import { getAllpokemon } from "@/data/pokemon";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const pokemons = await getAllpokemon();
  console.log(pokemons);

  return (
    <>
      <main className="container">
        <h2 className="text-4xl text-center my-4 font-bold">ポケモン図鑑</h2>
        <div className=" grid md:grid-cols-3 sm:grid-cols-1 gap-5 container my-10">
          {pokemons.map((pokemon) => {
            return (
              <div
                key={pokemon.id}
                className="flex flex-col p-6 items-center gap-3 bg-green-700 rounded-lg relative"
              >
                <h2 className="text-2xl font-bold">
                  {pokemon.name}
                  <Link
                    href={`/${pokemon.id}`}
                    className="absolute inset-0"
                  ></Link>
                </h2>
                <img
                  src={pokemon.sprites.front_default}
                  className="size-40"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
