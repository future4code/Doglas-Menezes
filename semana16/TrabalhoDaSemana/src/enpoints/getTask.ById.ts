import {Request, Response} from "express";
import moment from "moment";
import selectTaskById from "../data/selectTaskById";

export default async function getTaskById(
    req:Request, 
    res: Response
){
  try{ 
    //Validar as entradas da requisição
  
    //consultar o banco de dados
    const result = await selectTaskById(req.params.id)
     if(!result){
      res.status(400).send({
        message:"Tarefa não encontrada"
     })
     return
    }
    //Validar saida do banco

    //responder a requisição
    res.status(200).send({id:result.id,
      title:result.title,
      descripton:result.descripton,
      deadline:moment(result.deadline,'YYYY/MM/DD').format('DD//MM/YYYY'),
      status:result.status,
      authorId:result.author_id,
      athorNickname: result.nickname
    })

  }catch(error:any){
     res.status(400).send({
       message:error.message || error.sqlMessage
     })
  }

}