import { Card } from "../../components/card";
import { EmptyState } from "../../components/empyState";
import { PokemonType } from "../../interfaces/pokemon.interface";
import { usePokemonStore } from "../../store/pokemonStore";

export const Pokedex = (): JSX.Element => {
  const pokemonList = usePokemonStore((state) => state.pokemonList);
  return (
    <>
      {pokemonList.length < 1 ? (
        <EmptyState />
      ) : (
        <section className="pokedex mt-4">
          <div className="row">
            {pokemonList.map((pokemon: PokemonType) => (
              <article className="col-md-2 mb-4" key={pokemon.id}>
                <Card pokemon={pokemon} />
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
