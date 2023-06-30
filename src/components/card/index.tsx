import "./card.css";
import { PokemonType } from "../../interfaces/pokemon.interface";

type Props = {
  pokemon: PokemonType;
};

export const Card = ({ pokemon }: Props): JSX.Element => {
  return (
    <div className="card">
      <img
        src={pokemon.sprites.other?.home.front_default}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body text-center">
        <h5 className="card-title card__title">
          {pokemon.name} - <span>N°{pokemon.id}</span>
        </h5>
        <p className="card-text card__text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};
