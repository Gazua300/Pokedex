import styled from 'styled-components'
import PokeBall from '../../img/pokeBall.png'

export const PokeCard = styled.div`
    background-image: url(${PokeBall});
    display: inline-grid;
    border-radius: 100vh;
    width: 20vw;
    height: 40vh;
    margin: 20px;
`
export const Image = styled.img`
    width: 25vw;
    margin-right: 5vw;        
`
export const Button = styled.button`    
    border-radius: 30px;
    position: relative;
    top: 40vh;
    height: 5.5vh;
    width: 8vw;
    cursor: pointer;                
`
export const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
`