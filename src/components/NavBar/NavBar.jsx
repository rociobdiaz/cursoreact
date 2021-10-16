import React from 'react'
//import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import './Navbar.scss';

/* export const NavBar = ({titulo, greeting}) => {
    return (
        <section>
            
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">{titulo}</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <CartWidget />
                    </Nav>
                </Container>
            </Navbar>

            <div>
                <p>{greeting}</p>
            </div>
            
        </section>
    )
} */

export const NavBar = ({ logo }) => {
    return (
        <header className="header">
            <h1>logo</h1>

            <div>
                <nav>
                    <NavLink activeClassName={'activeLink'} exact to="/">Inicio</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/productos/libreria">Libreria</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/productos/papelera">Papelera</NavLink>
                    <NavLink activeClassName={'activeLink'} exact to="/contacto">Contacto</NavLink>
                    <Link to="/cart"><CartWidget/></Link>
                </nav>
            </div>
        </header>
    )
}