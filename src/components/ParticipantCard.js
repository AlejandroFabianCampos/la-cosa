import React, { Component } from 'react';
import { Media } from 'reactstrap';

export default class ParticipantCard extends Component {
  render() {
    return (
      <div className={"MediaBackground"+this.props.index}>
        <style>
          {".MediaBackground"+this.props.index+" {"+this.props.style+"; padding: 20px;} @media (max-height: 712px) {.MediaBackground {padding: 10px;}} "}
        </style>
        <Media>
          <Media body>
            <Media heading>
            {this.props.name}
            </Media>
            ¡{this.props.name} está participando de La Cosa!
          </Media>
        </Media>
      </div>
    )
    }
}