import Context from './Context'
import {useState} from 'react'
import axios from 'axios'



const GlobalState = (props)=>{
  const [pokemons, setPokemons] = useState([])
  const [pokeAdded, setPokeAdded] = useState([])
  const [added, setAdded] = useState([])



  const getPokemons = ()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res=>{
        setPokemons(res.data.results)
      }).catch(err=>{
        alert('Algo deu errado!\n'+err.reponse.data.message)
      })  
  }


  const addToPokedex = (url)=>{
    axios.get(url).then(res=>{
      
      setPokeAdded([...pokeAdded, res.data])      
    	alert(`${res.data.name} adicionado à pokedex`)
      removeFromList(res.data.name)
      
    }).catch(err=>{
    	alert('Algo deu errado!')
    })
  }


  const removeFromList = (name)=>{
      const newPokemons = pokemons.filter(poke=>{
        return name !== poke.name
      })
      setPokemons(newPokemons)
  }


  const removeFromPokedex = (name)=>{
      const newPokeAdded = pokeAdded.filter(poke=>{
        return name !== poke.name
      })
      setPokeAdded(newPokeAdded)
  }




  const states = {pokemons, pokeAdded}
  const setters = {removeFromPokedex}
  const requests = {getPokemons, addToPokedex}

//===============Provider======================
	return<Context.Provider value={{states, setters, requests}}>
  			 {props.children}
  		  </Context.Provider>
}
export default GlobalState