import PokedexHeader from "./PokedexHeader"
import {useContext} from 'react'
import Context from '../../global/Context'
import styled from 'styled-components'
import pokeBall from '../../img/pokeBall.png'
import {useHistory} from 'react-router-dom'


//==============Estilização=======================
const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr)
`
const Card = styled.div`
  display: inline;
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


//==================Componente funcional================
const PokedexPage = () => {
	const {states, setters} = useContext(Context)
	const history = useHistory()


//======================Renderização====================
return (
  <>
    <PokedexHeader/>
    <Container>
        {states.pokeAdded ? states.pokeAdded.map(poke=>{
        	return<Card>
				      <Picture src={poke.sprites.front_default} />
				      <div>
				        <BtnName onClick={() => history.push(`detail/${poke.name}`)}>
				          Ver Detalhes
				        </BtnName>
				        <BtnName onClick={()=> setters.removeFromPokedex(poke.name)}>
				          Remover
				        </BtnName>
				      </div>
				    </Card>
        }) : <h1>Sua pokedex está vazia</h1>}
    </Container>
  </>
  )
}
export default PokedexPage;
