import styled from "styled-components";
import {useHistory} from 'react-router-dom'

const Formulario=styled.div`
border: solid 1px black;
width: 400px;
height: 800px;
margin: 30px;
display: flex;
flex-direction: column;
`



export default function AplicationFromPage (){ 
  const history = useHistory()
  const previousPage = () =>{
    history.goBack()
  }
  
  return(
<Formulario>
  <h3>Bora Viajar</h3>
  <input placeholder="Escolha a viagem"></input>
  <input placeholder="Nome"></input>
  <input placeholder="Idade"></input>
  <input placeholder="Texto de candidatura"></input>
  <input placeholder="Profissão"></input>
  <input placeholder="Pais"></input>
  <button onClick={previousPage}>Volta</button>
  <button>Enviar</button>

</Formulario>

);
}