import styled from "styled-components";
// import PokeBall from "../../img/pokeBall.png";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    text-align: "center";
    font-size: "1.5rem";
    margin-top: "1vh";
  }
`
export const Figure = styled.img`
  width: 20vw;
`
export const Power = styled.div`
  background-image: linear-gradient(to right, #6e9a00, whitesmoke);
  margin: 20px;
  width: 23vw;
  padding: 20px;
  box-shadow: 3px 3px 6px;
`
export const Text = styled.div`
  line-height: 7vh;
  padding: 10px;
`
export const Types = styled.div`
  background-image: linear-gradient(#6e9a00, whitesmoke);
  margin: 20px;
  width: 23vw;
  height: 15vh;
  padding: 15px;
  text-align: center;
  box-shadow: 3px 3px 6px;
`
export const Moves = styled.div`
  background-image: linear-gradient(to right, #6e9a00, whitesmoke);
  margin: 20px;
  width: 23vw;
  height: 55vh;
  padding: 15px;
  box-shadow: 3px 3px 6px;
`
export const MovesAndTypes = styled.div`
  /*este styled apesar de conter
	nenhuma iformação foi necessário
	para manter as duas ultimas divs
	em posições de coluna*/
`
