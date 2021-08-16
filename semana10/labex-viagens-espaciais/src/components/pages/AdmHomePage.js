import styled from "styled-components";

const CardDaViagem= styled.div`
border: solid 1px black;
width: 400px;
height: 50px;
margin: 30px;
display: flex;
justify-content:space-between;
`
const ContainerBotao= styled.div`
display: flex;
border: solid 1px black;
height: 20px;
width: 400px;
justify-content:space-around;
margin: 30px;
`

export default function AdmHomePage (){ 
  
  return(
  <div>
    <ContainerBotao>
    <button>Voltar</button>
    <button>Criar Viagem</button>
    </ContainerBotao>
  <h3>Lista com as viagens</h3>
    <CardDaViagem><p>Nome da viagem</p> <button>X</button></CardDaViagem>
    <CardDaViagem><p>Nome da viagem</p> <button>X</button></CardDaViagem>
    <CardDaViagem><p>Nome da viagem</p> <button>X</button></CardDaViagem>
  </div>
);
}