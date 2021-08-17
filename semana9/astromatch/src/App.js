import React, { useState,useEffect } from "react";
import CardMatch from './components/CardMatch';
import CardLista from './components/CardLista'





import styled from 'styled-components';
import axios from "axios";


const ContainterPrincipal = styled.div`
background-color: #06172b;
margin:0;
padding: 0;
text-align: center;
width: 100vw;
height: 100vw;

`
const CardTudo=styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
flex-direction: column;
`

export default function App() {
  const[TelaAtual,setTelaAtual]= useState("CardMatch")
  const[Perfil,setPerfil]=useState({})
  const[MatchPerfil,setMatchPerfil]=useState([])

  
  
  const getProfileToChoose = () =>{
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/doglas/person')
    .then(res=>{ 

     setPerfil(res.data.profile)
    })
    .catch(err=>{
      console.log(err)
    })

  }
useEffect(()=>{
 getProfileToChoose()
},[])

const getMatches = () =>{
  axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/doglas/matches')
  .then(res=>{ 
console.log(res)
   setMatchPerfil(res.data.profile)
  })
  .catch(err=>{
    console.log(err)
  })

}

const choosePerson = () =>{
  
 const headers= {
   headres:{
  'Content-Type':'application/json'
 }}
 const body={
   id:`${MatchPerfil}`,
   choiche:true
 }

  axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/doglas/choose-person',headers, body )

  .then(res=>{ 
    console.log(res)

  })
  .catch(err=>{
    console.log(err)
  })

}

  
  


  const escolheTela = ()=>{

    switch (TelaAtual) {

    case "CardMatch":
      return <CardMatch getProfileToChoose={getProfileToChoose} Perfil={Perfil}
      choosePerso={choosePerson}/>
    case "CardLista":
      return <CardLista getMatche={getMatches} MatchPerfil={MatchPerfil}
      choosePerson={choosePerson}/>
    default:
        return <div>pagina não encontrada</div>
    }
  }

  const mudarParaCardLista = () =>{
    setTelaAtual("CardLista")
  }
  const mudarParaCardMatch = () =>{
    setTelaAtual("CardMatch")
  }


  
  return (
    <ContainterPrincipal>
      <CardTudo>
      
     
      <header>
      <button onClick={mudarParaCardLista}>Matches recebidos </button>
      <button onClick={mudarParaCardMatch}>Pagina de match</button>
      {escolheTela()}
      </header>
      
      </CardTudo>
    </ContainterPrincipal>
  );
}

