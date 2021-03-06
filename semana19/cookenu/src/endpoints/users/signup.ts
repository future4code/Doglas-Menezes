import { Request, Response} from "express";
import connection from "../../connection";
import { generateToken } from "../../services/authenticator";
import { generateHash } from "../../services/hashManager";
import generateId from "../../services/idCreated";
import { userTableName } from "../../types";

export default async function signup(
  req: Request, res: Response
  ):Promise<void>{
    try{
      const{ name, email, password}=req.body
      if(!name|| !email || !password){
        res.statusCode=422
        throw new Error("'name':'', 'email':'', 'password':''  Required!!!")
      }

      if(password.lenght <6){
        res.statusCode=422
        throw new Error("'Password' short min 6 characters")
      }

    const [user] = await connection(userTableName).where({email})
    if(user){
      res.statusCode=409
      throw new Error("Email already in use")
    }

      const id: string=generateId()
      
      const cypherPassword:string= generateHash(password)
      

      await connection(userTableName)
      .insert({id,name,email, password:cypherPassword})

      const token: string=generateToken({id})
      res.send({token})

    }catch (error:any){
      console.log(error.message);
      res.status(500).send("Internal Server Error")
    }
  }