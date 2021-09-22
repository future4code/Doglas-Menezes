import React, { useEffect,useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';  
import useStyles from './Styled'
import {goToLogin, goToPostDetails} from '../../Routes/Coordinator'
import {useHistory } from 'react-router-dom'
import useRequestData from '../../Hooks/useRequestData';
import {BASE_URL} from '../../Service/BaseUrl'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CommentIcon from '@material-ui/icons/Comment';


const FeedPage=()=>{
const history=useHistory()
  useEffect(()=> {
  if(localStorage.getItem('token')===null){
    goToLogin(history)

  }
  }, [])

const classes = useStyles();

const posts=useRequestData([],`${BASE_URL}/posts`)
console.log(posts)


  return(
<div>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Posts
        </Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Lista de postagens
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Faça sua postagem maneira ai meu consagrado 
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Crie seu post
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Não sei se vou usar
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {posts.map((card) => (
            <Grid item key={card.id}>
              <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                    <strong>{card.username}</strong>
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography>
                  {card.body}
                  </Typography>
                  <Typography>
                  {card.comentCount}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <ArrowUpwardIcon/>
                    vote sim{}
                  </Button>
                  <p>
                    {card.voteSum}
                  </p>
                  <Button size="small" color="primary">
                    <ArrowDownwardIcon/>
                    vote não{card.votenum}
                  </Button>

                  <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.button}
                  startIcon={<CommentIcon/>}
                  onClick={()=>goToPostDetails(history,card.id)}
                  >
                    Comentario
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  </div>
)
}
export default FeedPage