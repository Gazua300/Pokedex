import { useParams } from "react-router-dom";
import DetailHeader from "./DetailHeader";
import {
  Figure,
  Power,
  Container,
  Text,
  Types,
  Moves,
  MovesAndTypes,
} from "./styled";
import axios from "axios";
import { useState, useEffect } from "react";

const DetailPage = () => {
  const params = useParams();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      .then((res) => {
        console.log(res.data);
        setPokemon(res.data);
      });
  }, []);

  return (
    <>
      <DetailHeader pokemon={pokemon} />
      <Container>
        {pokemon.sprites && <Figure src={pokemon.sprites.front_default} />}
        <Power>
          <h3> Poderes</h3>
          <Text>
            <p>
              <b>hp: </b>
              {pokemon.stats && pokemon.stats[0].base_stat}
            </p>
            <p>
              <b>attack: </b>
              {pokemon.stats && pokemon.stats[1].base_stat}
            </p>
            <p>
              <b>defense: </b>
              {pokemon.stats && pokemon.stats[2].base_stat}
            </p>
            <p>
              <b>special-attack: </b>
              {pokemon.stats && pokemon.stats[3].base_stat}
            </p>
            <p>
              <b>special-defense: </b>
              {pokemon.stats && pokemon.stats[4].base_stat}
            </p>
            <p>
              <b>speed: </b>
              {pokemon.stats && pokemon.stats[5].base_stat}
            </p>
          </Text>
        </Power>
        <MovesAndTypes>
          <Types>
            <h3>Categorias</h3>
            {pokemon?.types?.map((tp) => {
              return <span style={{margin:'20px'}}>{tp.type.name}</span>
            })}
          </Types>
          <Moves>
            <h3>Principais Atques</h3>
            <Text>
              <p>{pokemon.moves && pokemon.moves[0].move.name}</p>
              <p>{pokemon.moves && pokemon.moves[1].move.name}</p>
              <p>{pokemon.moves && pokemon.moves[2].move.name}</p>
              <p>{pokemon.moves && pokemon.moves[3].move.name}</p>
            </Text>
          </Moves>
        </MovesAndTypes>
        {pokemon.sprites && <Figure src={pokemon.sprites.back_default} />}
      </Container>
    </>
  );
};
export default DetailPage;
