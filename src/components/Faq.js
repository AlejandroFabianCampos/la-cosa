import React from 'react';
import CollapsableCard from './CollapsableCard';
import './App.css';


export default function Faq() {
  document.title = "La Cosa - F.A.Q.";
  return (

    <div>
      <h1 className="TitleText">Frequently Asked Questions</h1>
      <div className="FaqQuestions">
        <CollapsableCard title="¿De verdad no saben que es la cosa?" text="No, no lo sabemos."/>
        <CollapsableCard title="¿Son personas verdaderas las que participan?" text={<CollapsableCard title="¿De verdad querés saber?" text="No, no lo son."/>}/>
        <CollapsableCard title="¿Quienes Participan entonces?" text="Eso, es clasificado."/>
        <CollapsableCard title="¿Tiene La Cosa algo que ver con las películas de 1982 y 2011?" text="No, a La Cosa le ofende que la confundan."/>
        <CollapsableCard title="¿Podré participar en algun futuro de La Cosa?" text="Tal vez, si muchas personas quieren participar de La Cosa es posible que hable con ella para que se los permita. Me lo pueden hacer saber en camposalejandrofabian@gmail.com"/>
      </div>
    </div>
  )
}

