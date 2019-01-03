import React from 'react';
import './Home.css';
import ParticipantFeed from './ParticipantFeed'
import { Button } from 'reactstrap';

export default function Home() {
  return (
    <div className="Home">
      <h1 className="TitleText">¡Bienvenidos a La Cosa!</h1>
      <ParticipantFeed/>
      <Button color="info" className="CenteredButton">¿Que es "La cosa"?</Button>
    </div>
  )
}
