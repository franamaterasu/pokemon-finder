import { create } from "zustand";

interface PokemonState {
  pokemonList: [];
  addToPokemonList: (value) => void;
}

export const usePokemonStore = create<PokemonState>((set) => ({
  pokemonList: [],
  addToPokemonList: (value) =>
    set((state) => ({
      pokemonList: [...state.pokemonList, value],
    })),
}));
