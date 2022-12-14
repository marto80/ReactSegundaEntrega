import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import './estilos.css';

const NavBar = () => {

    return (
        <ul>
            <li>
                <Link to="/category/human">Human</Link>
            </li>
            <li>
                <Link to="/category/alien">Alien</Link>
            </li>
            <li>
                <Link to="/">Contacto</Link>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <CartWidget />
        </ul>
    );
};

export default NavBar;