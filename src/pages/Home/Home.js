import PokeCard from "../../components/PokeCard"
import HomeHeader from "./HomeHeader"
import {useEffect, useContext} from "react"
import Context from '../../global/Context'
import styled from "styled-components"




const Home = (props) => {
  const {states, requests} = useContext(Context)

 
  useEffect(() => {    
    requests.getPokemons()
  }, [])


//===============Renderização do pokecard===========

  const pokeNameAndUrl = states.pokemons.map(poke=>{
    return <PokeCard key={poke.name}
            name={poke.name}
            url={poke.url}
            addToPokedex={requests.addToPokedex}/>
  })       

//==============Renderização da página===============
  return (
    <><HomeHeader />
      {pokeNameAndUrl}
    </>
  )
}
export default Home;
