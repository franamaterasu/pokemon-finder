import { useState, useEffect } from "react";
import { Card } from "../card";
import { GrUpdate } from "react-icons/gr";
import { CgPokemon } from "react-icons/cg";
import { usePokemonStore } from "../../store/pokemonStore";
import "./finder.css";
import { Loading } from "../loading";
import { PokemonType } from "../../interfaces/pokemon.interface";

export const Finder = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string | number>("pikachu");
  const [pokemon, setPokemon] = useState<PokemonType>({
    id: 0,
    name: "",
    sprites: {},
  });

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
      .then((res) => res.json())
      .then((res) => setPokemon(res));
  }, [inputValue]);

  const handleClickChangePokemon = () => {
    const number = Math.floor(Math.random() * 500);
    setInputValue(number);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const { addToPokemonList, pokemonList } = usePokemonStore();

  const handleClick = (pokemon: PokemonType): void => {
    const pokemonAdded = pokemonList.some(
      (item: PokemonType) => item.name === pokemon.name
    );

    !pokemonAdded
      ? addToPokemonList(pokemon)
      : alert("Your pokemon is already in your pokedex");
  };

  return (
    <section className="finder row justify-content-center align-items-center">
      <div className="col-md-3">
        {pokemon.sprites === undefined ? (
          <Loading />
        ) : (
          <Card pokemon={pokemon} />
        )}

        <form onSubmit={handleSubmit} className="mt-3">
          <input
            type="text"
            className="form-control finder__input"
            placeholder="Search pokemon by name or pokedex ID..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
        <div className="finder__buttons d-flex gap-4 justify-content-center mt-3">
          <button
            className="finder__button btn btn-danger"
            onClick={handleClickChangePokemon}>
            <GrUpdate className="finder__icon" />
          </button>
          <button
            className="finder__button btn btn-success"
            onClick={() => handleClick(pokemon)}>
            <CgPokemon className="finder__icon" />
          </button>
        </div>
      </div>
    </section>
  );
};
