import { Request, Response } from "express";
import UserBusiness from "../../business/user/UserBusiness";
import { LoginInputDTO, SignupInputDTO } from "../../entities/userEntitites";



export default class UserController{

  signup = async (
    req: Request, 
    res: Response
    ) => { 
      const {name,email, password}= req.body
      const input: SignupInputDTO ={
      email,
      name, 
      password
    }
    const userBusiness = new UserBusiness()
    try{
        const token = await userBusiness.singup(input)
        res.status(200).send({message:"User crieated success!!",token})

    }catch (error:any){
      console.log(error.message);
      if(res.statusCode){
      res.status(500).send("Internal Server Error")
    }
  }
    
      
    }

  login= async(
    req: Request, 
    res: Response
    )=>{
      try{
        let message = "success!!"
        const {email, password}= req.body
        const input: LoginInputDTO ={
        email, 
        password
      }

      const token = await new UserBusiness().Login(input)

    }catch(error:any){
       let message= error.sqlMessage || error.message
       res.statusCode=400
       res.send({ message})
      }
}
}