import { Route, Routes as Router, BrowserRouter } from "react-router-dom";
import { Main as MainListComics } from "./components/list-comics/Main";
import { Main as MainIndividualComic } from "./components/individual-comic/Main";
import { Main as MainShopping } from "./components/cart-shopping/Main";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route element={<MainListComics />} path="/" />
        <Route element={<MainListComics />} path="/page/:page" />
        <Route
          element={<MainIndividualComic />}
          path="/marvel-comics/:comicId"
        />
        <Route element={<MainShopping />} path="/checkout/cart/" />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
