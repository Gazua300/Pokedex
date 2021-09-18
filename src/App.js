import Routes from "./Routes/Routes";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes />
    </div>
  );
};
export default App;
