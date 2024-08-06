import { StaticImport } from "next/dist/shared/lib/get-img-props";

export async function fetchTotalPages(
  setTotalPages: React.Dispatch<React.SetStateAction<number>>
) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000`
    );

    if (!response.ok) {
      return "Failed To Fetch Pokemons";
    }

    const data = await response.json();
    setTotalPages(Math.ceil(data.results.length / 20));
    return Math.ceil(data.results.length / 20);
  } catch (error) {
    return `Error caught: ${error}`;
  }
}

export async function fetchData(
  page: number,
  setData: React.Dispatch<React.SetStateAction<Pokemons[]>>
) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000`
    );

    if (!response.ok) {
      return "Failed To Fetch Pokemons";
    }

    const data = await response.json();
    setData(data.results);
    return data;
  } catch (error) {
    return `Error caught: ${error}`;
  }
}

export async function fetchPokemon(
  url: string,
  setPokemon: React.Dispatch<React.SetStateAction<Pokemon | undefined>>
) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return "Failed To Fetch Pokemon";
    }

    const data = await response.json();
    setPokemon(data);
    return data;
  } catch (error) {
    return `Error caught: ${error}`;
  }
}

export async function fetchSpecies(
  url: string,
  setBackgroundColor: React.Dispatch<React.SetStateAction<string>>
) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      return "Failed To Fetch Pokemon";
    }

    const data = await response.json();
    setBackgroundColor(data.color.name);
    return data;
  } catch (error) {
    return `Error cuaght: ${error}`;
  }
}

export function transformName(name: string | undefined) {
  const firstLetter: string | undefined = name?.charAt(0);
  if (firstLetter) {
    return firstLetter.toUpperCase() + name?.substring(1);
  }
}

export function transformPokemonSprites(sprites: Sprites | undefined) {
  if (sprites) {
    const source: string | StaticImport =
      sprites.other.dream_world.front_default != null ||
      sprites.other.dream_world.front_female != null
        ? "" + sprites.other.dream_world.front_default
        : "" + sprites.other.dream_world.front_female;

    return source ? source : "";
  }
}

export function transformPokemonID(id: number | undefined) {
  if (id) {
    const result = "#" + "0".repeat(5 - id.toString().length) + id;

    return result;
  }
}

export function transformPokemonBackground(type: string | undefined) {
  let result = "";
  switch (type) {
    case "normal":
      result = "bg-[#A8A77A]";
      break;
    case "fire":
      result = "bg-[#EE8130]";
      break;
    case "water":
      result = "bg-[#6390F0]";
      break;
    case "electric":
      result = "bg-[#F7D02C]";
      break;
    case "grass":
      result = "bg-[#7AC74C]";
      break;
    case "ice":
      result = "bg-[#96D9D6]";
      break;
    case "fighting":
      result = "bg-[#C22E28]";
      break;
    case "poison":
      result = "bg-[#A33EA1]";
      break;
    case "ground":
      result = "bg-[#E2BF65]";
      break;
    case "flying":
      result = "bg-[#A98FF3]";
      break;
    case "psychic":
      result = "bg-[#F95587]";
      break;
    case "bug":
      result = "bg-[#A6B91A]";
      break;
    case "rock":
      result = "bg-[#B6A136]";
      break;
    case "ghost":
      result = "bg-[#735797]";
      break;
    case "dragon":
      result = "bg-[#6F35FC]";
      break;
    case "dark":
      result = "bg-[#705746]";
      break;
    case "steel":
      result = "bg-[#B7B7CE]";
      break;
    case "fairy":
      result = "bg-[#D685AD]";
      break;
  }

  return result;
}

import normal from "../assets/icons/normal.svg";
import fire from "../assets/icons/fire.svg";
import water from "../assets/icons/water.svg";
import electric from "../assets/icons/electric.svg";
import grass from "../assets/icons/grass.svg";
import ice from "../assets/icons/ice.svg";
import fighting from "../assets/icons/fighting.svg";
import poison from "../assets/icons/poison.svg";
import ground from "../assets/icons/ground.svg";
import flying from "../assets/icons/flying.svg";
import psychic from "../assets/icons/psychic.svg";
import bug from "../assets/icons/bug.svg";
import rock from "../assets/icons/rock.svg";
import ghost from "../assets/icons/ghost.svg";
import dragon from "../assets/icons/dragon.svg";
import dark from "../assets/icons/dark.svg";
import steel from "../assets/icons/steel.svg";
import fairy from "../assets/icons/fairy.svg";
export function generateTypeLogo(type: string | undefined) {
  switch (type) {
    case "normal":
      return normal;
    case "fire":
      return fire;
    case "water":
      return water;
    case "electric":
      return electric;
    case "grass":
      return grass;
    case "ice":
      return ice;
    case "fighting":
      return fighting;
    case "poison":
      return poison;
    case "ground":
      return ground;
    case "flying":
      return flying;
    case "psychic":
      return psychic;
    case "bug":
      return bug;
    case "rock":
      return rock;
    case "ghost":
      return ghost;
    case "dragon":
      return dragon;
    case "dark":
      return dark;
    case "steel":
      return steel;
    case "fairy":
      return fairy;
  }

  return "";
}

export function handleSort(
  sortOption: string,
  setSortOption: React.Dispatch<React.SetStateAction<string>>,
  pokemons: Pokemons[],
  setPokemons: React.Dispatch<React.SetStateAction<Pokemons[]>>
) {
  let tempArray = pokemons;
  setSortOption(sortOption);
  if (sortOption == "num-asc") {
    const commonString = "https://pokeapi.co/api/v2/pokemon/";
    tempArray = tempArray.sort((a, b) => {
      return parseInt(a.url.substring(commonString.length, a.url.length - 1)) <
        parseInt(b.url.substring(commonString.length, b.url.length - 1))
        ? -1
        : parseInt(a.url.substring(commonString.length, a.url.length - 1)) >
          parseInt(b.url.substring(commonString.length, b.url.length - 1))
        ? 1
        : 0;
    });
    setPokemons(tempArray);
  } else if (sortOption == "num-desc") {
    const commonString = "https://pokeapi.co/api/v2/pokemon/";
    tempArray = tempArray.sort((a, b) => {
      return parseInt(a.url.substring(commonString.length, a.url.length - 1)) <
        parseInt(b.url.substring(commonString.length, b.url.length - 1))
        ? 1
        : parseInt(a.url.substring(commonString.length, a.url.length - 1)) >
          parseInt(b.url.substring(commonString.length, b.url.length - 1))
        ? -1
        : 0;
    });
    setPokemons(tempArray);
  } else if (sortOption == "alp-asc") {
    tempArray = tempArray.sort((a, b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    setPokemons(tempArray);
  } else {
    tempArray = tempArray.sort((a, b) => {
      return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
    });
    setPokemons(tempArray);
  }
}
