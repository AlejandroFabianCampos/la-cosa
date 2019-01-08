import React from 'react';
import './App.css';
import ParticipantFeed from './ParticipantFeed';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

export default function Home() {
  document.title = "La Cosa - Página Principal";
  return (
    <div className="Home">
      <h1 className="TitleText">¡Bienvenidos a La Cosa!</h1>
      <ParticipantFeed/>
      <Button color="info" className="CenteredButton" ><Link to="/about/" className="text-white">¿Que es "La cosa"?</Link></Button>
    </div>
  )
}
