import styled from "styled-components";
import {useHistory} from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../requisitions/Informations";

const Formulario=styled.div`
border: solid 1px black;
width: 400px;
height: 800px;
margin: 30px;
display: flex;
flex-direction: column;
`
const Nameselect= styled.select`
width: 200px;
height: 100px;
`



export default function AplicationFromPage (){
  const[trips,setTrips]= useState([]) 
  const[form,setForm]= useState({name:'',age:0 ,ApplicationText:'', profession: '',country:'',trip: null
  })
  const onChangeInput =(e)=>{
    const newValue= e.target.value
    const newName= e.target.name
    setForm({...form,[newName]:newValue})
  }

  const history = useHistory()
  const previousPage = () =>{
    history.goBack()
  }
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

  
    const listatrips=(trip)=>{
      trips.map((trip)=>{
        return <div  key={trip.id}>
         <option>{trip.name}</option>
         </div>
         }
    })
  return(
<Formulario>
  <h3>Bora Viajar</h3>
  <form>
    
  <select placeholder="Escolha a viagem"
  onChange={onChangeInput}
  name={'trip'}
  value={form['trip']}
  >
  {listatrips}
  </select>

  <input placeholder="Nome"
  onChange={onChangeInput}
  name={'name'}
  value={form['name']}
  ></input>
  <input placeholder="Idade"
  onChange={onChangeInput}
  name='age'
  value={form['age']}
  ></input>
  <input placeholder="Texto de candidatura"
  onChange={onChangeInput}
  name={'applicationText'}
  value={form['applicationText']}
  ></input>
  <input placeholder="Profissão"
  onChange={onChangeInput}
  name={'profession'}
  value={form['profession']}
  ></input>
  <input placeholder="Pais"
  onChange={onChangeInput}
  name={'country'}
  value={form['country']}
  ></input>
  <button onClick={previousPage}>Volta</button>
  <button>Enviar</button>
  </form>
</Formulario>

);
}