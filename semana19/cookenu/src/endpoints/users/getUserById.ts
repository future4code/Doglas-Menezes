import { Request, Response} from "express";
import connection from "../../connection";
import { getTokenData } from "../../services/authenticator";
import { userTableName } from "../../types";

export default async function getUserById(req: Request, res: Response
  ): Promise<void> {
    try{

    const token:string=req.headers.authorization!

    const tokenData=getTokenData(token)
    if(!tokenData){
      res.statusCode=401
      throw new Error("Unauthorized,Not a token or Not a key")
    }

    const [user]= await connection(userTableName).where({id:req.params.id})
    if(!user){
      res.statusCode=404
      throw new Error("User Not found")
    }

    res.send({
      id:user.id,
      name:user.name,
      email:user.email
    })

    }catch (error:any){
      console.log(error.message);
      if(res.statusCode === 200){
      res.status(500).send("Internal Server Error")
    }else{
      res.send(error.message)
    }
  }
  }