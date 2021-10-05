import {Request, Response} from "express";
import moment from "moment"
import insertTask from "../data/insertTask";

export default async function createTask(
    req:Request, 
    res: Response
){
  try{ 
    //Validar as entradas da requisição
    if(!req.body.title || !req.body.descripton || !req.body.deadline || !req.body.authorId ){
      res.status(400).send({
        message:'"title","descripton","deadline" e "authorId". são obrigatórios'
      })
      return
    }

    const dateDiff:number = moment(req.body.deadline,'DD/MM/YYYY').unix() - moment().unix()

    if(dateDiff <=0){
      res.status(400).send({
        message:'deadline tem que ser uma data futura'
      })
    }

    //consultar o banco de dados
    const id: string = Date.now() + Math.random().toString()
    await insertTask(
      id,
      req.body.title,
      req.body.descripton,
      moment(req.body.deadline, 'DD/MM/YYYY').format('YYYY-MM-DD'),
      req.body.authorId
      )

    //responder a requisição
    res.status(200).send({
      message:"Criou a tarefa",
      id
    })

  }catch(error:any){
     res.status(400).send({
       message:error.message || error.sqlMessage
     })
  }

}