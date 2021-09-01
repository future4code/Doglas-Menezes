import React from "react"
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./Styled"
import Button from '@material-ui/core/Button'
import LoginForm from "./LoginForm"
import {useHistory} from "react-router-dom"
import {goToSingUp} from '../../routes/coordinator'
import useUnProtectedPage from "../../hooks/UseUnprotectedPAge"

const LoginPage=({ setRightButtonText})=>{
const history= useHistory()
useUnProtectedPage()

  return(
  <ScreenContainer>
      <LogoImage/>
      <LoginForm  setRightButtonText={setRightButtonText}/>
      <SignUpButtonContainer>
      <Button
      onClick={()=>goToSingUp(history)}
       type={'submit'}
       fullWidth
       variant={'text'}
       color={'primary'}
       margin={'normal'}
       >
        Cadastre-se
      </Button>
      </SignUpButtonContainer>
  </ScreenContainer>
  )
}
export default LoginPage;