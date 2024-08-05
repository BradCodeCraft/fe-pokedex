type Ability = {
  name: string;
  url: string;
};

type Abilities = {
  ability: Ability[];
  is_hidden: boolean;
  slot: number;
};

type Cries = {
  latest: string;
  legacy: string;
};

type Forms = {
  name: string;
  url: string;
};

type Version = {
  name: string;
  url: string;
};

type GameIndices = {
  game_index: number;
  version: Version;
};

type Move = {
  name: string;
  url: string;
};

type MoveLearnMethod = {
  name: string;
  url: string;
};

type VersionGroup = {
  name: string;
  url: string;
};

type VersionGroupDetails = {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
};

type Moves = {
  move: Move;
  version_group_details: VersionGroupDetails[];
};

type Species = {
  name: string;
  url: string;
};

type DreamWorld = {
  front_default: string | null;
  front_female: string | null;
};

type Home = {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

type OfficialArtwork = {
  front_default: string | null;
  front_shiny: string | null;
};

type Showdown = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

type Other = {
  dream_world: DreamWorld;
  home: Home;
  official_artwork: OfficialArtwork;
  showdown: Showdown;
};

type GenerationX = {
  back_default?: string | null;
  back_gray?: string | null;
  back_transparent?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
  front_default?: string | null;
  front_female?: string | null;
  front_gray?: string | null;
  front_transparent?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
  animated?: GenerationX;
};

type Versions = {
  generation_i: {
    red_blue: GenerationX;
    yellow: GenerationX;
  };
  generation_ii: {
    crystal: GenerationX;
    gold: GenerationX;
    silver: GenerationX;
  };
  generation_iii: {
    emerald: GenerationX;
    firered_leafgreen: GenerationX;
  };
  generation_iv: {
    diamond_pearl: GenerationX;
    heartgold_soulsilver: GenerationX;
    platinum: GenerationX;
  };
  generation_v: {
    black_white: GenerationX;
  };
  generation_vi: {
    omegaruby_alphasapphire: GenerationX;
    x_y: GenerationX;
  };
  generation_vii: {
    icons: GenerationX;
    ultra_sun_ultra_moon: GenerationX;
  };
  generation_viii: {
    icons: GenerationX;
  };
};

type Sprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: Other;
  versions: Versions;
};

type Stats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

type Types = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

interface Pokemon {
  abilities: Abilities[];
  base_experience: number;
  cries: Cries[];
  forms: Forms[];
  game_indices: GameIndices[];
  height: number;
  held_items: any[];
  id: number; // unique key
  is_default: boolean;
  location_area_encounters: string;
  moves: Moves[];
  name: string;
  order: number; // same as unique key
  past_abilities: any[];
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stats[];
  types: Types[];
  weight: number;
}

interface Pokemons {
  name: string;
  url: string;
}
