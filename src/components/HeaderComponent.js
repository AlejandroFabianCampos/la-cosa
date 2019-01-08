import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


  export default class HeaderComponent extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="#">La Cosa</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink tag={Link} exact to="/" activeClassName="active">Página Principal</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/about/" activeClassName="active">¿Qué es La Cosa?</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/faq/" activeClassName="active">F.A.Q.</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/AlejandroFabianCampos/la-cosa" target="_blank">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
