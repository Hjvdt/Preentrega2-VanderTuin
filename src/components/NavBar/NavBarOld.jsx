import { Navbar, Container, Nav, NavLink, NavDropdown } from 'react-bootstrap';
import useFetch from '../../Hooks/useFetch';
import { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
    const [categories, setCategories] = useState([]);
    const [categorias] = useFetch('https://api.escuelajs.co/api/v1/categories');

    useFetch(() => {
        if (categorias) {
            setCategories(categorias);
        }
    }, [categorias]);

    return (
        <Navbar expand="lg" bg="dark" variant='dark'>
            <Container>
                <Navbar.Brand href="#home" to="/">E-COMMERCE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={(({ isActive }) => isActive ? "link active" : "")} to="/">INICIO</NavLink>
                        <NavLink className={(({ isActive }) => isActive ? "link active" : "")} to="/nosotros">NOSOTROS</NavLink>
                        <NavDropdown title="CATEGORIAS" id="basic-nav-dropdown">
                            <NavDropdown.Item to={`/category/category1`}>Material Descartable</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Guantes</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Material de vidrio y otros</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget />
        </Navbar>
    )
}

export default NavBar;