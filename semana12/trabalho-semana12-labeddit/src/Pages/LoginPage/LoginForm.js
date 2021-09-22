import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './Styled'
import useForm from '../../Hooks/useForm';
import { login } from '../../Service/user';
import {useHistory} from 'react-router-dom'
import { goToSingUpPage } from '../../Routes/Coordinator';

const LoginForm=()=>{
  const classes = useStyles();
  const history=useHistory()

  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear,history)
}
  return(
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper} >
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Faça seu Login
      </Typography>
      <form className={classes.form} 
      onSubmit={onSubmitForm}
      >
        <TextField
          variant={"outlined"}
          margin={"normal"}
          required
          fullWidth
          label={"Email"}
          name={"email"}
          autoComplete={"email"}
          autoFocus
          Value={form.email}
          onChange={onChange}
        />
        <TextField
          variant={"outlined"}
          margin={"normal"}
          required
          fullWidth
          name={"password"}
          label={"Senha"}
          type={"password"}
          autoComplete={"current-password"}
          onChange={onChange}
          value={form.password}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Entrar
        </Button>
        <Grid container>
          <Grid item>
            <Link href="#" onClick={()=>goToSingUpPage(history)} variant="body2">
              {"Ta sem conta?,Cadastra aqui e bora curtir!"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Container>
  )
}
export default LoginForm;