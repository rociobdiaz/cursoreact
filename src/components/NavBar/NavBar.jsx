import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget';
import './Navbar.scss';
import loguito from '../Data/imagenes/logo.png'

export const NavBar = ({ logo }) => {
    return (
        <header className="header">
            <a href="/">
                <img src={loguito} alt="logo libreria" />
                Librería Pencil Case
            </a>

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