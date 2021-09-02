import styled from "styled-components";
import {useHistory, useParams} from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../requisitions/Informations";

const CardViagem = styled.div`
border: solid 1px black;
width: 400px;
height: 600px;
margin: 30px;
`

const CardDoCandidatoAprovado= styled.div`
border: solid 1px black;
width: 100%;
max-height: 20%px;
`
const CardDoCandidatoPendente= styled.div`
border: solid 1px black;
width: 100%;
max-height: 40%;
`
const DIV= styled.div`
display: flex;
justify-content:space-around;
`

const useVerification = () =>{
  const history = useHistory()
  
  useEffect(() => {
    const token = localStorage.getItem('Token')
    if (token === null){
      console.log("Não está logado")
      history.push("/LoginPage")
    }

    },[])
}

export default function TripeDetailsPage (){ 
useVerification() 

const history = useHistory()
const params= useParams()
const [detalhe,setDetalhes]= useState({})
const [candidatosPendentes,setCandidatosPendentes] = useState([])
const [candidatosAprovados,setCandidatosAprovados] = useState([])




useEffect(()=>{
  const token= localStorage.getItem('Token')
   axios.get(`${baseUrl}/trip/${params.id}`, 
   {headers : {
     auth: token
   }
   })
   .then((res) =>{ 
     console.log("detalhes",res.data)
     setDetalhes(res.data.trip)
     setCandidatosAprovados(res.data.trip.approved)
     setCandidatosPendentes(res.data.trip.candidates)
   })
   .catch((err)=>{
     console.log(err)
   })

},[])


  
  const previousPage = () =>{
    history.goBack()
  }

  const candidatosAprovadosCard = candidatosAprovados && candidatosAprovados.map ((candidato)=>{
    return <CardDoCandidatoAprovado key={candidato.id}>
      <div>
        <strong><p>{candidato.name}</p></strong>
      </div>
    </CardDoCandidatoAprovado>
  })

  const candidatosPendentesCard = candidatosPendentes && candidatosPendentes.map ((candidato)=>{
    return <CardDoCandidatoPendente key={candidato.id}>
    <DIV><h2>Candidatos Pendentes</h2><button>Aprovar</button>
        <button>Reprovado</button></DIV>
      
        <div>{candidato.name}</div>
        <div>Texto da candidatura:{candidato.applicationText}</div>
        <div>Idade:{candidato.age}</div>
        <div>Pais de origem{candidato.country}</div>
        <div>Profissão:{candidato.profession}</div>
       
      
    </CardDoCandidatoPendente>
  })

  return(
<CardViagem><button onClick={previousPage} >voltar</button>
  <h2>{detalhe.name}</h2>
    <ol type="none">
      <ul>{detalhe.name}</ul>
      <ul>Descrição:{detalhe.description}</ul>
      <ul>planeta:{detalhe.planet}</ul>
      <ul>Duração em dias:{detalhe.durationInDays}</ul>
      <ul>Data:{detalhe.date}</ul>
     </ol>
  {candidatosPendentesCard}
  <h2>Candidatos Aprovados</h2>
  {candidatosAprovadosCard}
</CardViagem>

);
}