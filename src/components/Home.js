import React from 'react';
import './Home.css';
import { Button } from 'reactstrap';

export default function Home() {
  return (
    <div className="Home">
      <h1 className="TitleText">¡Bienvenidos a la cosa!</h1>
      <Button color="info" className="CenteredButton">¿Que es "La cosa"?</Button>
    </div>
  )
}
