import styled from "styled-components";
import {useHistory} from 'react-router-dom'
import { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../requisitions/Informations";

const CardViagem = styled.div`
border: solid 1px black;
width: 400px;
height: 800px;
margin: 30px;
`

const CardDoCandidato= styled.div`
border: solid 1px black;
width: 400px;
height: 200px;

`

const useVerification = () =>{
  const history = useHistory()
  
  useEffect(() => {
    const token = localStorage.getItem('Token')
    if (token=== null){
      console.log("Não está logado")
      history.push("/LoginPage")
    }

    },[])
}

export default function TripeDetailsPage (){ 
useVerification() 

const history = useHistory()


useEffect(()=>{
  const token= localStorage.getItem('Token')
   axios.get(`${baseUrl}/trip/id`, 
   {headers : {
     auth: token
   }
   })
   .then((res) =>{ 
     console.log(res.data)
   })
   .catch((err)=>{
     console.log(err)
   })

},[])


  
  const previousPage = () =>{
    history.goBack()
  }
  
  return(
<CardViagem>
  <h3>Nome da viagem</h3>
    <ol type="none">
      <ul>Nome</ul>
      <ul>Descrição</ul>
      <ul>planeta</ul>
      <ul>localização</ul>
      <ul>Duração</ul>
      <ul>Data</ul>
     </ol>
  <h2>Candidatos Pendentes</h2>
  <CardDoCandidato>
    <ol type="none">
    <ul>Nome</ul>
    <ul>Idade</ul>
    <ul>Pais</ul>
    <ul>Profissão</ul>
    <ul>Texto da Candidatura</ul>
    </ol>
    <button>Aprovar</button>
    <button>Reprovado</button>
  </CardDoCandidato>
  <h2>Candidatos Aprovados</h2>
  <ol>
    <ul>Pessoa</ul>
    <ul>pessoa</ul>
  </ol>
  <button onClick={previousPage}></button>
</CardViagem>

);
}