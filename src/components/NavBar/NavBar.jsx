import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../img/Logo.png';
import './NavBar.css';
function NavBar() {
    return (
        <nav>
            <div id="navBar">
                <Link to="/">
                    <img id="Logo" src={Logo} alt="Logo" />
                </Link>
                <h3 id='tituloNav'>E-COMMERCE</h3>
                <ul id='navMenu'>
                    <li className="home"><Link to="/">Home</Link></li>
                    <li className="nosotros"><Link to="/About">Nosotros</Link></li>
                    <li className="menuItem">Categorías</li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    )
}
export default NavBar;
