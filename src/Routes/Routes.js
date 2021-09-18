import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import DetailPage from "../pages/DetailPage/DetailPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/pokedex" component={PokedexPage}></Route>
        <Route exact path="/detail/:name" component={DetailPage}></Route>
        <Route>
          <h1>Página não encontrada</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
