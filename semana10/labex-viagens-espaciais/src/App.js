import React from 'react'
import AdmHomePage from './components/pages/AdmHomePage';
import AplicationFromPage from './components/pages/AplicationFromPage';
import Home from './components/pages/Home';
import ListTripPage from './components/pages/ListTripPage';
import LoginPage from './components/pages/LoginPage';
import CreateTripPage from './components/pages/CreateTripPage';
import TripeDetailsPage from './components/pages/TripeDetailsPage';
import Rotas from './components/routes/Rotas'

 export default function App() {
  return (
    <div>
    <h1>LabeX</h1>
       <Rotas/>
    </div>
  );
}
