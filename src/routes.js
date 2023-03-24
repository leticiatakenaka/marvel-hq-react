import { Route, Routes as Router, BrowserRouter } from "react-router-dom";
import Body from "./components/Body";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route element={<Body />} path="/:page?" />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
