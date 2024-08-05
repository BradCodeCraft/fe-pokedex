import React, { useState } from "react";
import filter from "../assets/icons/filter.svg";
import Image from "next/image";

export default function Filter({
  visibility,
  setVisibility,
}: {
  visibility: Boolean;
  setVisibility: React.Dispatch<React.SetStateAction<Boolean>>;
}) {
  return (
    <>
      <button
        className="flex px-2.5 py-1 border-2 border-gray-400 bg-white rounded-full"
        onClick={() => setVisibility(!visibility)}
      >
        <Image src={filter} alt="filter logo" />
        <h1 className="ml-2.5">Filters</h1>
      </button>
    </>
  );
}
