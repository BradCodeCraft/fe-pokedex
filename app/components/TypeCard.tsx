import React from "react";
import {
  generateTypeLogo,
  transformName,
  transformPokemonBackground,
} from "../utils/data";
import Image from "next/image";

export default function TypeCard({ type }: { type: Types }) {
  return (
    <div
      className={`${transformPokemonBackground(
        type.type.name
      )} flex  mr-2.5 py-1 px-2.5 rounded-full text-black contrast-200`}
    >
      {/* img */}
      <Image
        src={generateTypeLogo(type.type.name)}
        alt="Type SVG"
        className="mr-1"
        width={20}
      />
      {/* type name */}
      <h1>{transformName(type.type.name)}</h1>
    </div>
  );
}
