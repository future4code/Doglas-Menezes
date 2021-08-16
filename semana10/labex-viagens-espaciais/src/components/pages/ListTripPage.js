import React from "react";
import styled from "styled-components";


const ListDeViagem=styled.div`
display: flex;
flex-direction: column;
`
const CardDaViagem=styled.div`
border: solid 1px black;
width: 400px;
height: 800px;
margin: 30px;
`
export default function ListTripPage (){ 
return(
<ListDeViagem>
  <button>Voltar</button>
  <button>Increver-se</button>
  <h3>Lista de viagens</h3>
  <CardDaViagem>
    <li>
      <ul>nome da viagen</ul>
      <ul>Nome</ul>
      <ul>Descrição</ul>
      <ul>planeta</ul>
      <ul>localização</ul>
      <ul>Duração</ul>
      <ul>Data</ul>
     </li>
  </CardDaViagem>
</ListDeViagem>

);
}