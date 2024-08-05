"use client";

import React, { Suspense, useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Sort from "./components/Sort";
import { fetchData, fetchTotalPages } from "./utils/data";
import Image from "next/image";
// SVGs
import Pokedex from "./assets/icons/Pokedex-logo.svg";
// Components
import CardNavigation from "./components/CardNavigation";
import Card from "./components/Card";
import Filter from "./components/Filter";
import FilterTable from "./components/FilterTable";

export default function MainPage() {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalNumberOfPages, setTotalNumberOfPages] = useState<number>(1);
  const [visibility, setVisibility] = useState<Boolean>(false);

  useEffect(() => {
    fetchTotalPages(setTotalNumberOfPages);
    fetchData(page, setPokemons);
  }, [page]);

  return (
    <Suspense>
      <div className="p-7">
        <Image src={Pokedex} alt="Pokemon Logo" />
        {/* Search + Sort + Filters */}
        <div className="min-w-full h-40 my-5">
          <SearchBar />

          <div className="mt-5 flex flex-col">
            <div className="w-full flex justify-between">
              {/* Sort */}
              <Sort />
              {/* Filters */}
              <Filter visibility={visibility} setVisibility={setVisibility} />
            </div>
            <FilterTable visibility={visibility} />
          </div>
        </div>

        {/* Cards */}
        {pokemons && pokemons.length > 0 ? (
          <div className="grid grid-cols-4 gap-20">
            {pokemons.map((pokemon) => {
              return pokemons.indexOf(pokemon) + 1 <=
                Math.ceil(pokemons.length / totalNumberOfPages) * page &&
                pokemons.indexOf(pokemon) + 1 >
                  Math.ceil(pokemons.length / totalNumberOfPages) *
                    (page - 1) ? (
                <div key={pokemons.indexOf(pokemon) + 1}>
                  <Card url={pokemon.url} />
                </div>
              ) : null;
            })}
          </div>
        ) : (
          <h1>No Pokemon Found</h1>
        )}

        {/* Navigation for card */}
        <CardNavigation
          page={page}
          totalNumberOfPages={totalNumberOfPages}
          setPage={setPage}
        />
      </div>
    </Suspense>
  );
}
