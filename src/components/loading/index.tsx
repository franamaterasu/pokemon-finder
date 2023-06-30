import { CgPokemon } from "react-icons/cg";
import "./loading.css";

export const Loading = (): JSX.Element => {
  return (
    <section className="loading">
      <CgPokemon className="loading__icon" />
      <p className="loading__text">Loading...</p>
    </section>
  );
};
