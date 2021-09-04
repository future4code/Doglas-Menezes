import React from 'react'
import Router from './Routes/Router';
import Typography from '@material-ui/core/Typography'
import useStyles from './Pages/FeedPage/Styled'

function App() {
  const classes = useStyles();

  return (
    <div>
     <Router/>
     <footer className={classes.footer}>
        <Typography variant="h6" align="center"
     gutterBottom
     >
          Criado Por Doglas Viegas
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
       um Site com HTML,CSS,REACT.js,JavaScript e Integração com a API da LABENU
        </Typography>
        
      </footer>
    </div>
  );
}

export default App;
