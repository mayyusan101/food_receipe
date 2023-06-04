import Nav from "./components/Nav";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Receipes from "./pages/Receipes";
import { Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import SearchedRecepies from "./components/SearchedRecepies";
import DetailsReceipe from "./components/DetailsReceipe";
import SavedMeals from "./pages/SavedMeals";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receipes" element={<Receipes />}>
          <Route index element={<Categories />} />
          <Route path="category/:type" element={<Category />} />
          <Route path="search/:name" element={<SearchedRecepies />} />
        </Route>
        <Route path="receipe/:receipeId" element={<DetailsReceipe />} />
        <Route path="saved/meals" element={<SavedMeals />} />
      </Routes>
    </>
  );
}

export default App;
