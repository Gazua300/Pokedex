import PokeCard from "../../components/PokeCard";
import HomeHeader from "./HomeHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";




const Home = (props) => {
  const [pokemons, setPokemons] = useState([])
  const [pokeAdded, setPokeAdded] = useState([])

  const getPokemons = ()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res=>{
        setPokemons(res.data.results)
      }).catch(err=>{
        alert('Algo deu errado!\n'+err.reponse.data.message)
      })  
  }

  const addToPokedex = (url)=>{
    axios.get(url).then(res=>{
      setPokeAdded(res.data)
    }).catch(err=>{
      console.log('Algo deu errado!')
    })
  }

  useEffect(() => {    
    getPokemons()
  }, [])

  const pokeNameAndUrl = pokemons.map(poke=>{
    return <PokeCard key={poke.name}
            name={poke.name}
            url={poke.url}
            addToPokedex={addToPokedex}/>
  })       


//==============Renderização===============
  return (
    <><HomeHeader/>
      {pokeNameAndUrl}
    </>
  )
}
export default Home;
