import React from "react"
import {ScreenContainer, LogoImage} from './Styled'
import SingUpForm from './SingUpForm'
import useUnProtectedPage from "../../hooks/UseUnprotectedPAge"


const SingUpPage=({setRightButtonText})=>{
  useUnProtectedPage()
  return(
<ScreenContainer>
    <LogoImage/>
    <SingUpForm setRightButtonText={setRightButtonText} />
</ScreenContainer>
)}
export default SingUpPage;