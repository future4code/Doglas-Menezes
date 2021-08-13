import styled from "styled-components"


const CardListaDepessoas=styled.div` 
width: 400px;
height: 400px;
border: solid green 2px;
align-items: center;
`

export default function CardLista({choosePerson}){
  
  return(
    <CardListaDepessoas> 
      <h1>Matchs recebidos</h1>
      <div><img 
      Src={choosePerson.photo} alt='foto'/>

      {choosePerson.name}
      </div>
    
      

    

    </CardListaDepessoas>
  )

}