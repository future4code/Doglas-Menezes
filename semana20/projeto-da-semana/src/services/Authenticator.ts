import {sign,verify} from "jsonwebtoken"
import {config} from "dotenv"
import { authenticationData } from "../model/users/User"

config()

const {JWT_KEY}=process.env

export default class Authenticator{
  generateToken=(
  payload: authenticationData
):string => sign(
  payload,
  JWT_KEY!,
  {expiresIn:"1h"}
)

getTokenData=(
  token: string
): authenticationData | null => {
  try{
    const {id} = verify (token ,JWT_KEY!) as authenticationData 
    return {id}
  }catch (error){
    return null
  }
}
}
