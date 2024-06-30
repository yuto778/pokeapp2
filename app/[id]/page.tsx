import { Button } from "@/components/ui/button";
import { getpokemon } from "@/data/pokemon";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title: "詳細ページ",
  description: "詳細ページです",
};

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const pokemon = await getpokemon(id);

  return (
    <div className=" bg-green-300 md:h-screen flex flex-col md:flex-row justify-center md:relative">
      <div className=" p-10 flex flex-row md:flex-col w-1/3 items-center space-y-10">
        <div className="size-10 self-start relative">
          <FontAwesomeIcon icon={faHome} className="self-start" size="sm" />
          <Link href={"/"} className="absolute inset-0"></Link>
        </div>

        <h2 className="text-3xl self-start">詳細ページ</h2>
        <h2 className="font-bold text-3xl mt-6">{pokemon.id}</h2>
        <h2 className="font-bold text-2xl">{pokemon.name}</h2>
      </div>

      <div
        className="w-2/3 flex items-center justify-center
      "
      >
        <img src={pokemon.sprites.front_default} className="size-96" alt="" />
      </div>
      {pokemon.id !== 1 && (
        <div className="absolute bottom-4 left-4">
          <Button variant={"outline"} className="relative font-bold text-2xl">
            ⇦
            <Link
              href={`/${pokemon.id - 1}`}
              className="absolute inset-0"
            ></Link>
          </Button>
        </div>
      )}

      {pokemon.id !== 151 && (
        <div className="absolute bottom-4 right-4">
          <Button variant={"outline"} className="relative font-bold text-2xl">
            ⇨
            <Link
              href={`/${pokemon.id + 1}`}
              className="absolute inset-0"
            ></Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default page;
