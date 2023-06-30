import { Link } from "react-router-dom";
import { CgPokemon } from "react-icons/cg";
import "./emptyState.css";

export const EmptyState = (): JSX.Element => {
  return (
    <section className="empty-state">
      <CgPokemon className="empty-state__icon" />
      <p className="empty-state__text">Your pokedex is empty...</p>
      <Link to="/" className="btn btn-success empty-state__button">
        Comeback to finder
      </Link>
    </section>
  );
};
