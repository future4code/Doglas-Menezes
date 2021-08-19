import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {useHistory} from 'react-router-dom'
import { baseUrl } from "../requisitions/Informations";
import axios from "axios";


const ListDeViagem=styled.div`
display: flex;
flex-direction: column;
`
const CardDaViagem=styled.div`
border: solid 1px black;
width: 400px;
height: 300px;
margin: 30px;
`
export default function ListTripPage (){
const [trips,setTrips] = useState([ ])


useEffect(()=> {
axios.get(`${baseUrl}/trips`)
.then((res)=>{
  setTrips(res.data.trips)
  console.log(res.data)
})
.catch((err)=>{
  console.log("Deu Erro",err.data)
})
},[])

  const history= useHistory()

  const goToAplicationFromPage = () => {
    history.push("/AplicationFromPage")
  }
  const previousPage = () =>{
    history.goBack()
  }
 

  console.log("Valor do estado",trips)
  const listTheTrip = trips && trips.map ((trip)=>{
    return <CardDaViagem key={trip.id}>
      <h2>{trip.name}</h2>
      <div>
        <p>Descrição: {trip.description}</p>
        <p>Planeta: {trip.planet}</p>
        <p>Duracção em dias:{trip.durationInDays}</p>
        <p>Data:{trip.date}</p>
      </div>
    </CardDaViagem>
  })

return(
<ListDeViagem>
  <button onClick={previousPage}>Voltar</button>
  <button onClick={goToAplicationFromPage}>Increver-se</button>
  <h3>Lista de viagens</h3>
  {listTheTrip}
</ListDeViagem>



);
}