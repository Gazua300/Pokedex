import {useState} from 'react'
import axios from 'axios'
import Routes from "./Routes/Routes";
import { createGlobalStyle } from "styled-components";
import {BrowserRouter} from 'react-router-dom'

const GlobalStyle = createGlobalStyle` 
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

const App = () => {
  
  return (
      <BrowserRouter>
        <GlobalStyle />
        <Routes/>
      </BrowserRouter>
  )
}
export default App;
