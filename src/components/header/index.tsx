import { Link } from "react-router-dom";
import { usePokemonStore } from "../../store/pokemonStore";
import { SiPokemon } from "react-icons/si";
import "./header.css";

export const Header = (): JSX.Element => {
  const pokemonList = usePokemonStore((state) => state.pokemonList);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <SiPokemon className="navbar-brand" />
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Finder
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pokedex" className="nav-link">
              Your pokedex - {pokemonList.length}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
