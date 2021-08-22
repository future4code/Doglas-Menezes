import styled from "styled-components";
import {useHistory, useParams} from 'react-router-dom'
import axios from "axios";
import { baseUrl } from "../requisitions/Informations";
import { useEffect, useState } from "react";

const CardDaViagem= styled.div`
border: solid 1px black;
max-width: 400px;
max-height: 200px;
margin: 30px;
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
const Botao= styled.button`
cursor: pointer;
`



export default function AdmHomePage (){ 
  const history = useHistory()
  const [trips,setTrips] = useState([ ])
  const params= useParams()



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

  const deletTrip=(id)=>{
    const token= localStorage.getItem('Token')
    axios.del(`${baseUrl}/trips/${id}`,
      {headers : { 
        'Content-Type':'application/json',
        auth : token 
      }
    })
    .then((res)=>{
       console.log(res)
    })
    .catch((err)=>{
       console.log(err)
    })
  }

    

  const goToCreateTripPage=()=>{
    history.push("/CreateTripPage")
  }

  const goToReturnNoTurningBack=()=>{
    history.replace("/LoginPage")
  }

  const goToTripDetailsPage=(id)=>{
    history.push(`/TripDetailsPage/${id}`)
  }



  const listTheTrip = trips && trips.map ((trip)=>{
    return <CardDaViagem key={trip.id}>
      <h2>{trip.name}</h2>
      <div>
        <p>Descrição: {trip.description}</p>
        <p>Planeta: {trip.planet}</p>
      </div>
      <Botao><button onClick={() => goToTripDetailsPage(trip.id)}>Detalhes</button></Botao>
     <Botao><button onChange={() => deletTrip(trip.id)}>X</button></Botao>
    </CardDaViagem>
  })
  
  return(
  <div>
    <ContainerBotao>
    <button onClick={goToReturnNoTurningBack}>Sair</button>
    <button onClick={goToCreateTripPage}>Criar Viagem</button>
    </ContainerBotao>
  <h3>Lista com as viagens</h3>
    {listTheTrip}
  </div>
);
}