import {Request, Response} from "express"
import connection from "../connection"


export default async function createCharacters(
  req: Request,
  res: Response
): Promise<void>{
  try{
  const { name,gender,description }=req.body

  console.log(req.headers["content-type"])
 
  // characters.push({
  //   id:Date.now(),
  //   name,
  //   gender,
  //   description
  // })
  
  await connection("character")
  .insert({
    name,
    gender,
    description
  })

  res.send(201).end()
  }
  catch(error: any){
    res.status(500).end()
  }

}