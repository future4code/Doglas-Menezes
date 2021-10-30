import userData from "../../data/user/userData";
import UserData from "../../data/user/userData";
import { LoginInputDTO, SignupInputDTO, User } from "../../entities/userEntitites";
import Authenticator from "../../services/Authenticator";
import HashManager from "../../services/HashManager";
import IdGenerator from "../../services/IdGenerator";

export default class UserBusiness{

  async singup(input:SignupInputDTO): Promise<string> {
    try{
    const{name, email, password}=input 
    const userdata= new UserData()
    const idGenerator= new IdGenerator()
    const hashManager= new HashManager();
    const authenticator= new Authenticator();

    if(!name || !email || !password){
       throw new Error("Fill in all the fields!!")
    }
    if(password.length <= 6){
      throw new Error("Password is short")
    }

    const registeredByuser= await userdata.findUserByEmail(email)
    if(registeredByuser){
      throw new Error("Email already in use")
    }
    
    const id = idGenerator.execute();

    
    const hashPassword=await hashManager.generateHash(password)

    const user : User={
      id,
      name:input.name,
      email:input.email, 
      password:hashPassword
    }
    
    await userdata.insert(user)

    const token = authenticator.generateToken({id})
    return token

}catch (error:any){
  throw new Error(error.message)
}
  }

  async Login(input:LoginInputDTO): Promise<string>{
     const userData= new UserData();
     const hashPassword = new HashManager();
     const authenticator= new Authenticator();
    try{ 
      if(!input.email || !input.password){
        throw new Error("They don't check!!")
      }
      
      const user:User= await userData.checkEmail(input.email)

      if(!user){
        throw new Error("Invalid credentials")
      }
      
      const correctPassword:boolean=await hashPassword.compareHash(input.password,user.password)
      if(!correctPassword){
        throw new Error("Invalid credentials")
      }


      const token = authenticator.generateToken({id:user.id})
      return token
      

    }catch (error:any){
      throw new Error(error.message)
    }
  }
}