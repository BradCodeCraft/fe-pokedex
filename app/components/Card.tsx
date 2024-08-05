import React, { Suspense, useEffect, useState } from "react";
import {
  fetchPokemon,
  fetchSpecies,
  transformPokemonBackground,
  transformPokemonID,
  transformName,
  transformPokemonSprites,
} from "../utils/data";
import TypeCard from "./TypeCard";

export default function Card({ url }: { url: string }) {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [backgroundColor, setBackgroundColor] = useState<string>("");

  useEffect(() => {
    fetchPokemon(url, setPokemon);
    pokemon?.species.url
      ? fetchSpecies(pokemon.species.url, setBackgroundColor)
      : null;
  }, [url, pokemon?.species.url]);

  console.log(pokemon?.types);

  return (
    <Suspense>
      <div
        className={`${transformPokemonBackground(
          pokemon?.types[0].type.name
        )} rounded-lg h-60 p-5 text-white`}
      >
        {/* Image */}
        <div className="flex justify-center h-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={transformPokemonSprites(pokemon?.sprites)}
            alt={`${pokemon} sprite`}
            width={150}
            height={150}
            className="-mt-20"
          />
        </div>

        {/* Name */}
        <h1 className="font-bold text-3xl">{transformName(pokemon?.name)}</h1>

        {/* ID */}
        <h1 className="mt-1.5">{transformPokemonID(pokemon?.id)}</h1>

        {/* Types */}
        {pokemon?.types ? (
          <div className="flex mt-5">
            {pokemon.types.map((type) => {
              return <TypeCard key={pokemon.types.indexOf(type)} type={type} />;
            })}
          </div>
        ) : null}
      </div>
    </Suspense>
  );
}
