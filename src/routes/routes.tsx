import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import Home from "../pages/Home";
import SingleCocktail from "../pages/SingleCocktail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cocktail/:id" element={<SingleCocktail />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
