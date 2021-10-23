import { hash }  from "../services/generateHas";
import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/CreateId";
import  {user}  from "../entities/User";

export async function signup(
  req:Request,
  res:Response
  ) :Promise<void>{
try{
  const{name,email,password,role}=req.body

  if(!name|| !email || password.lenght()>=6){
    res.status(422).send("Insira todas informações 'name':'', 'email':'','password':''")
  }
  const [user] = await connection ('to_cookenu_list_users')
  .where({email})
  .where({name})
  if (user){
    res.statusCode= 409
    throw new Error('email ja cadastrado')
  }
  if(user){
    res.statusCode= 409
     throw new Error
    ('name ja cadastrado')
  }

  const id: string = new IdGenerator().generateId()

  const hashPassword = await hash(password);

  const newUser: user = { id, name, email, password, role }

    await connection('to_cookenu_list_users')
      .insert(newUser)

    const token = new Authenticator().generateToken({ id })

    res.status(201).send({ newUser, token })


}catch (error:any) {

  if (res.statusCode === 200) {
     res.status(500).send({ message: "Internal server error" })
  } else {
     res.send({ message: error.sqlMessage || error.message })
  }
}
}