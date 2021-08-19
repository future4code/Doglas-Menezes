import styled from "styled-components"
import {useHistory} from "react-router-dom"


const CadastroViagem= styled.div`
border: solid 1px black;
width: 400px;
height: 800px;
margin: 30px;
display: flex;
flex-direction: column;

`

export default function CreateTripPage (){ 
  const history= useHistory()
   
  const previousPage=()=>{
    history.goBack()
  }
  
  return(
<CadastroViagem>
  <input placeholder="Nome"></input>
  <input placeholder="Escolha planeta"></input>
  <input placeholder="Localização"></input>
  <input placeholder="data"></input>
  <input placeholder="descrição"></input>
  <input placeholder="duração"></input>
  <button onClick={previousPage}>Voltar</button>
  <button>Criar</button>

</CadastroViagem>

);
}