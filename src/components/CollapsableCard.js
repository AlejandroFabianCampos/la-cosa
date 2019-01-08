import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Collapse } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default class CollapsableCard extends Component {
  constructor (props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle () {
    this.setState(() => ({
      collapse: !this.state.collapse
    }))
  }

  render() {
    return (
    <div>
        <Card>
            <CardTitle onClick={this.toggle} style={{ margin: '1rem' }}>{this.props.title}</CardTitle>
            <Collapse isOpen={this.state.collapse}>
                <CardBody className="text-justify">
                    {this.props.text}
                </CardBody>
            </Collapse>
        </Card>
    </div>
    )
  }
}
