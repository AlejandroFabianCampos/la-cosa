import React from 'react';
import { Button } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom'; 

export default function About() {
  document.title= "Acerca de La Cosa";
  return (
    <div>
      <h1 className="TitleText">¿Qué es La Cosa?</h1>
      <h3 className="SubText">No lo sabemos, pero a la gente le gusta participar de ella, tal vez de esa forma se enteran de qué es.</h3>
      <Button color="danger"  className="CenteredButton"><Link to="/" className="text-white">Ver quienes están participando</Link></Button>
    </div>
  )
}
