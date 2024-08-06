import React from "react";
import { handleSort } from "../utils/data";

export default function Sort({
  sortOption,
  pokemons,
  setSortOption,
  setPokemons,
}: {
  sortOption: string;
  pokemons: Pokemons[];
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
  setPokemons: React.Dispatch<React.SetStateAction<Pokemons[]>>;
}) {
  return (
    <div>
      <select className="px-2.5 py-2 border-2 border-gray-400 bg-white rounded-lg">
        <option
          value="num-asc"
          onClick={() =>
            handleSort("num-asc", setSortOption, pokemons, setPokemons)
          }
        >
          Lowest Number First
        </option>
        <option
          value="num-desc"
          onClick={() =>
            handleSort("num-desc", setSortOption, pokemons, setPokemons)
          }
        >
          Highest Number First
        </option>
        <option
          value="alp-asc"
          onClick={() =>
            handleSort("alp-asc", setSortOption, pokemons, setPokemons)
          }
        >
          Alphabetically Ascending
        </option>
        <option
          value="alp-desc"
          onClick={() =>
            handleSort("alp-desc", setSortOption, pokemons, setPokemons)
          }
        >
          Alphabetically Descending
        </option>
      </select>
    </div>
  );
}
