import Context from './Context'
import {useState} from 'react'
import axios from 'axios'



const GlobalState = (props)=>{
  const [pokemons, setPokemons] = useState([])
  const [pokeAdded, setPokeAdded] = useState([])

console.log(pokeAdded)

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
      removeFromList(res.data.name)

      pokeAdded.map(added=>{
        if(res.data.name === added.name){
          alert(`${res.data.name} será duplicado na pokedex, pois já está adicionado!`)
        }
      })
            
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