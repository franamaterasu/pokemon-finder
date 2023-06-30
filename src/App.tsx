import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Pokedex } from "./pages/pokedex";

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <section className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
        </Routes>
      </section>
    </>
  );
};
