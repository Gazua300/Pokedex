import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home/Home";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import GlobalState from '../global/GlobalState'

const Routes = (props) => {   

  return (
      <Switch>
        <GlobalState>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/pokedex" component={PokedexPage}></Route>
          <Route exact path="/detail/:name" component={DetailPage}></Route>
        </GlobalState>
      </Switch>
  );
};

export default Routes;
