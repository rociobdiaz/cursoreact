import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import { CartWidget } from './CartWidget';
import './Navbar.scss';

export const NavBar = ({titulo, greeting}) => {
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
}
