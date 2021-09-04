import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { goToFeedPage } from '../../Routes/Coordinator';
import LoginForm from './LoginForm';

const LoginPage = () =>{
  const history=useHistory()
  useEffect(()=>{
if(localStorage.getItem('token')!== null){
  goToFeedPage(history)
}
  },[])
  return(
<LoginForm/>
);
  
}

export default LoginPage