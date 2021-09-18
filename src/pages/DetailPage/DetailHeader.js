import styled from "styled-components";
import { useHistory } from "react-router-dom";

const HeaderDiv = styled.header`
  background-image: url("https://www.portallos.com.br/wp-content/uploads/2010/03/pokemons-wallpaper.jpg");
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`
const Title = styled.h1`
  text-shadow: 3px 3px 7px yellow;
  font-size: 2.5rem;
`
const Button = styled.button`
  background-image: linear-gradient(#6e9a00, whitesmoke);
  font-size: 1rem;
  padding: 5px;
  width: 10vw;
  border-radius: 30px;
  cursor: pointer;
`

const DetailHeader = (props) => {
  const history = useHistory();

  return (
    <HeaderDiv>
      <Button onClick={() => history.goBack()}>Voltar</Button>
      <Title>{props.pokemon.name}</Title>
      <Button onClick={() => history.push("/pokedex")}>Pokedex</Button>
    </HeaderDiv>
  );
};
export default DetailHeader;
