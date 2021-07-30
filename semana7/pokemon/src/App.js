import React from "react";
import styled from "styled-components"
import axios from "axios";
import { nominalTypeHack } from "prop-types";
 
const Corpo=styled.div`
text-align:center;
border: solid black;
`
const ListaDePokemons=styled.div` 

` 


export default class App extends React.Component{
 state={
   pokemons: [],
   imagem:"",
   nome:""
 }
 
 
  componentDidMount(){
this.getPokemons()
 }
 
  getPokemons= async()=>{
    const url='https://pokeapi.co/api/v2/pokemon?limit=350&offset=0'
    const response = await 
    axios.get(url)
    this.setState({pokemons:response.data.results})
    
  }

  getPokemonImagem= async (e) =>{
    const url= e.target.value
    const response= await
    axios.get(`${url}`)
    this.setState({imagem: response.data.sprites.front_default})
    console.log(response)
  }

  getNomePokemon=async (e)=>{
    const url=e.target.value
    const response=await
    axios.get(`${url}`)
    this.setState({nome:response.data.types.type})
  }
  

  render() {
    const pokeList= this.state.pokemons.map
    ((poke)=>{
     return(
     <option key={poke.name}
     value={poke.url}>
     {poke.name}
     </option>
     )
    })

  
  
  
    return (
    
    <Corpo>
      <h1>Pokemon</h1>
      <h2>lista de top pokemons</h2>
      <select onChange={this.getPokemonImagem} >
        {pokeList}
       </select> 
      <ListaDePokemons>
       {this.state.imagem &&
       <img src={this.state.imagem} alt='Foto pokemon escolhido' ></img>
       }
       <p>{this.state.nome}</p>
       
       </ListaDePokemons>
    </Corpo>
      
  );
}
}