"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [input, setInput] = useState<string>("");

  function handleSearch() {
    console.log(input);
  }

  return (
    <>
      <div className="bg-white p-1 rounded-md flex text-blue-700 shadow-xl">
        <div className="flex items-center">
          <FaSearch className="text-2xl ml-2.5" />
        </div>

        <input
          className="focus:outline-none min-w-[65%] sm:min-w-[70%] md:min-w-[77%] lg:min-w-[83%] xl:min-w-[89%] py-2 px-2 placeholder:text-blue-700"
          type="text"
          placeholder="Pokemon name, number or type"
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          className="bg-yellow-400 text-blue-700 px-10 rounded-md p-1"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </>
  );
}
