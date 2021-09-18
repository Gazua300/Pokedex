import styled from "styled-components"
import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import pokeBall from '../img/pokeBall.png'



const Container = styled.div`
  display: inline-grid;
  margin-left: 10px;
`
const Card = styled.div`
  background-image: url(${pokeBall});
  margin: 20px;
  width: 27vw;
  height: 52vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  div{
    margin-top: 10vh;
  }
`
const Picture = styled.img`
  margin-top: 25vh;
`
const BtnName = styled.button`
  margin: 6px;
  height: 30px;
  border-radius: 10px;
  padding: 5px;
  background-image: linear-gradient(#6e9a00, whitesmoke);
  color: whitesmoke;
  cursor: pointer;
`

const PokeCard = (props) => {
  const history = useHistory();
  const [images, setImages] = useState([]);



  useEffect(() => {
    axios.get(props.url).then(res=>{
      setImages(res.data.sprites.front_default)
    })
  }, [props.url]);


//===========Renderização=====================
  return (<Container>
    <Card>
      <Picture src={images} />
      <div>
        <BtnName onClick={() => history.push(`detail/${props.name}`)}>
          Ver Detalhes
        </BtnName>
        <BtnName onClick={() => props.addToPokedex(props.url)}>
          Adicionar à Pokedex
        </BtnName>
      </div>
    </Card>
  </Container>)
}
export default PokeCard;
