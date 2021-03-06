import dotenv from "dotenv"
import { JwtPayload, sign, verify } from "jsonwebtoken"
import { authenticationData } from "../entities/User"

dotenv.config()

export class Authenticator {

  public generateToken = (
    payload: authenticationData
  ): string => {

    const token = sign(
      payload,
     "adsabsdbakjfdabnskjdaf",
      { expiresIn: "10h" }
    )

    return token
  }

  public getTokenData = (
    token: string
  ): authenticationData | null => {
    try {

      const tokenData = verify(
        token,
        "adsabsdbakjfdabnskjdaf"
      ) as JwtPayload

      return {
        id: tokenData.id
      }

    } catch (error) {
      console.log(error)
      return null
    }
  }
}