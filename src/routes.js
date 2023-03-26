import { Route, Routes as Router, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route element={<Main />} path="/" />
        <Route element={<Main />} path="/page/:page" />
        {/* <Route element={<Body />} path="/marvel-comics/:comicId" /> */}
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
