"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { handleSearch } from "../utils/data";

export default function SearchBar({
  setTotalNumberOfPages,
  setPokemons,
}: {
  setTotalNumberOfPages: React.Dispatch<React.SetStateAction<number>>;
  setPokemons: React.Dispatch<React.SetStateAction<Pokemons[]>>;
}) {
  const [input, setInput] = useState<string>("");

  return (
    <>
      <div className="bg-white p-1 rounded-md flex text-blue-700 shadow-xl justify-between">
        <div className="flex items-center min-w-[85%]">
          <FaSearch className="text-2xl ml-2.5" />
          <input
            className="focus:outline-none py-2 px-2 placeholder:text-blue-700 min-w-[90%]"
            type="text"
            placeholder="Pokemon name, number or type"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <button
          className="bg-yellow-400 text-blue-700 px-10 rounded-md p-1 font-bold "
          onClick={() =>
            handleSearch(input, setTotalNumberOfPages, setPokemons)
          }
        >
          Search
        </button>
      </div>
    </>
  );
}
