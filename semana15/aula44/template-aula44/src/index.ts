import express, { Request, Response } from 'express'
import {AddressInfo} from 'net'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())

type user = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: user[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

app.get('/users', (req:Request, res:Response)=>{
  let codeError:number = 400
  try{ 
      const name: string = req.query.name as string
      const user: user | undefined = users.find((user)=>user.name === name)
      if(!user) {
        codeError= 404
        throw new Error('User Not Found')
        }
      res.status(200).send(user)
  } catch(error:any){
     res.status(codeError).send({message: error.message})
  }
})

app.get('/users/:id', (req:Request, res:Response)=>{
  let errorCode= 400
  try{ const id:number = Number(req.params.id)
    if(isNaN(id)){
        errorCode= 422
        throw new Error('Invalid Value Id.Send a number!')
    }
      const user=users.find((user)=>user.id===id)
      if(!user){
        errorCode=404
        throw new Error('User not Found')
      }
      res.status(200).send(user)
  } catch(error:any){
     res.status(errorCode).send({message: error.message})
  }
})

app.post('/users',(req:Request, res:Response)=>{
  let errorCode = 400
  try{ 
    const{id,name,email,type,age}= req.body
    if(!id || !name || !email || !type || !age){
      errorCode=404
      throw new Error("Complet all Fields!")
    }
    const newUser: user={
      id,
      name,
      email,
      type,
      age,
    }

    users.push(newUser)
    res.status(201).send({message: 'User Created'})

  }catch(error:any){
    res.status(errorCode).send({message: error.message})
  }
})

app.patch('/users',(req:Request, res:Response)=>{
  let errorCode = 400
  try{ 
    const{id,name,email,type,age}= req.body
    if(!id || !name || !email || !type || !age){
      errorCode=404
      throw new Error("Complet all Fields!")
    }
    const newUser: user={
      id,
      name,
      email,
      type,
      age,
    }

    users.push(newUser)
    res.status(201).send({message: 'User Created'})

  }catch(error:any){
    res.status(errorCode).send({message: error.message})
  }
})





const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
     const address = server.address() as AddressInfo;
     console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
     console.error(`Failure upon starting server.`);
  }
});