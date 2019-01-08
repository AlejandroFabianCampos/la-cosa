import React, { Component } from 'react';
import ParticipantCard from './ParticipantCard.js';


const TotalNames = [
  "John",
  "Juan Carlos",
  "María",
  "Lautaro",
  "Don Juan",
  "Camila",
  "Alejandro",
  "Enzo",
  "Juan Cruz",
  "Fabian",
  "Eric",
  "Martín",
  "Juan"
];


const TotalColors = [
  "rgba(196, 98, 98, 0.308)",
  "rgba(127, 98, 196, 0.397)",
  "rgba(106, 196, 98, 0.397)",
  "rgba(196, 98, 172, 0.397)",
  "rgba(190, 196, 98, 0.397)",
  "rgba(98, 196, 196, 0.397)",
  "rgba(196, 154, 98, 0.397)",
  "rgba(255, 121, 150, 0.514)",
  "rgba(204, 255, 121, 0.514)"
]


export default class ParticipantFeed extends Component {
  constructor (props) {
    super(props);
    this.addName = this.addName.bind(this);
    this.state = { names: [
      "Camila",
      "Juan",
      "Enzo",
      "John",
      "Juan Carlos",
      "María",
      "Lautaro",
      "Don Juan"
    ],
    colors: [
      "rgba(196, 98, 98, 0.308)",
      "rgba(127, 98, 196, 0.397)",
      "rgba(106, 196, 98, 0.397)",
      "rgba(190, 196, 98, 0.397)",
      "rgba(98, 196, 196, 0.397)",
      "rgba(196, 154, 98, 0.397)",
      "rgba(255, 121, 150, 0.514)",
      "rgba(204, 255, 121, 0.514)"
    ]
  
    }
  }
  


  addName(){
    var min= 0; 
    var max= TotalNames.length;
    var maxColor = TotalColors.length;  
    var randomName = Math.floor(Math.random() * (+max - +min)) + +min;
    var randomColor = Math.floor(Math.random() * (+maxColor - +min)) + +min;
    var newName = this.state.names.concat(TotalNames[randomName]);
    var newColor = this.state.colors.concat(TotalColors[randomColor]);
    this.setState({names : newName, colors: newColor}, console.log(this.state));
  };

  componentDidMount() {
    this.IntervalID = setInterval(this.addName, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.IntervalID);
  }
  

  render() {
    var participantList = this.state.names.slice(0).reverse().map((name, index) => 
      <ParticipantCard name={name} index={index}  key={name+index} style={"background-color:" + this.state.colors[this.state.colors.length-index-1]}/>
    );
    return (
      <div className="FeedBackground">
        <div>{participantList}</div>
      </div>
    )
  }
}
