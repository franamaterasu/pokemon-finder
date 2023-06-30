export interface PokemonType {
  id: number;
  name: string;
  sprites: Sprites;
}

export interface Sprites {
  other?: Other;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
}

export interface Home {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface DreamWorld {
  front_default: string;
  front_female: null | string;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}
