import { Request, Response} from "express";
import connection from "../../connection";
import { getTokenData } from "../../services/authenticator";
import generateId from "../../services/idCreated";
import { recipeTableName } from "../../types";

export default async function createRecipe(req: Request, res: Response
  ): Promise<void> {
    try{ 
     const token = req.headers.authorization

     const {title,description} = req.body

     const tokenData = getTokenData(token!)
     if(!tokenData){
      res.statusCode=401
      throw new Error("Unauthorized,Not a token or Not a key")
    }

    if(!title || !description){
      res.statusCode=422
      throw new Error("'title' and 'description' required!Review your requisition!")
    }

     const id = generateId()

     const createAt = new Date()

     await connection(recipeTableName).insert(
       {
        id,
        title,
        description,
        create_at:createAt,
        author_id: tokenData!.id
      })

      res.send("Recipe create success!!")

    }catch (error:any){
      console.log(error.message)

      if(res.statusCode === 200){
        res.status(500).send("Internal Server error")
      }else{
        res.send(error.message)
      }
    }
  }