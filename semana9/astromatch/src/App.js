import React, { useState,useEffect } from "react";
import CardMatch from './components/CardMatch';
import CardLista from './components/CardLista'




import styled from 'styled-components';


const ContainterPrincipal = styled.div`
background-color: #06172b;
width: 100vw;
height: 100vw;
margin: 0;
padding: 0;
box-sizing: border-box;
`

export default function App() {
  const[TelaAtual,setTelaAtual]= useState("cardMatch")

  const escolheTela = ()=>{
    switch (TelaAtual) {
      case "cardMatch":
      return <CardMatch mudarParaCardMatch={mudarParaCardMatch}/>
      case "Lista":
      return <CardLista mudarParaCardLista={mudarParaCardLista}/>
      default:
        return <div>pagina não encontrada</div>
    }
  }

  const mudarParaCardLista () =>{
    setTelaAtual("Lista")
  }
  const mudarParaCardMatch () =>{
    setTelaAtual("CardMatch")
  }

  return (
    <ContainterPrincipal>
      {escolheTela()}

    </ContainterPrincipal>
  );
}

