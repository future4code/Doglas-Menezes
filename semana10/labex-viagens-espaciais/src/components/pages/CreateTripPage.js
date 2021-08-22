import styled from "styled-components"
import {useHistory} from "react-router-dom"
import axios from "axios"
import { baseUrl} from "../requisitions/Informations"
import { useState } from "react"


const CadastroViagem= styled.div`
border: solid 1px black;
width: 400px;
height: 800px;
margin: 30px;
display: flex;
flex-direction: column;

`

export default function CreateTripPage (){ 
  const[form,setForm]=useState({
  name: "",
  planet: " ",
  date: "",
  description: "",
  durationInDays:[]})
   
  const history= useHistory()
   
  const previousPage=()=>{
    history.goBack()
  }

const changeName=(e)=>{
  setForm({name: e.target.value})
}
const changePlanet=(e)=>{
  setForm({planet: e.target.value})
}
const changeDate=(e)=>{
  setForm({date: e.target.value})
}
const changeDescription=(e)=>{
  setForm({description: e.target.value})
}
const changeDuration=(e)=>{
  setForm({durationInDays: e.target.value})
}

  const createTrip=()=>{
  const token= localStorage.getItem('Token')
  axios.post(`${baseUrl}/trips`,form,
  {headers : { 
    'Content-Type':'application/json',
    'auth' : `${token}` 
    
  }
  })
  .then((res)=>{
        console.log(res)
  })
  .catch((err)=>{
        console.log(err)
  })
  }

  return(
<CadastroViagem>
  <input type="none" placeholder="Nome"
  required
  value={form.name}
  onChange={changeName}
  ></input>
  <input type="planeta" placeholder="planeta"
  required 
  value={form.planet}
  onChange={changePlanet} 
  ></input>
  <input type='date' placeholder="data"
  required
  value={form.date}
  onChange={changeDate}
  ></input>
  <input placeholder="descrição"
  required
  value={form.description}
  onChange={changeDescription}
  ></input>
  <input type="number" placeholder="duração em dias"
  required
  value={form.durationInDays}
  onChange={changeDuration}
  ></input>
  <button onClick={previousPage}>Voltar</button>
  <button onClick={createTrip}>Criar</button>

</CadastroViagem>

);
}