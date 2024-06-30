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
    <div className=" md:h-screen flex flex-col md:flex-row justify-center md:relative">
      <div className=" p-10 flex flex-col w-full md:w-1/3 items-center">
        <Button variant={"outline"} className="relative self-start">
          戻る
          <Link href={"/"} className="absolute inset-0"></Link>
        </Button>

        <div className="text-3xl self-start mt-6 ">詳細ページ</div>
        <h2 className="font-bold text-3xl mt-6 mb-8 md:mt-28 md:mb-12">
          ID: {pokemon.id}
        </h2>
        <h2 className="font-bold text-2xl">NAME: {pokemon.name}</h2>
      </div>

      <div
        className="w-full md:w-2/3 flex items-center justify-center
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
