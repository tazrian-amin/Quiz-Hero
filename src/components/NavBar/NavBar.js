import logo from '../../logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const navLinks = ['Home', 'Topics', 'Statistics', 'Blog'];
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src={logo}
                        width="45"
                        height="45"
                        className="d-inline-block align-top"
                    />{' '}
                    <Link className='fs-2 text-white text-decoration-none' to="/">Quiz Hero</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            navLinks.map((navLink, idx) => <NavLink
                                key={idx}
                                className={`${({ isActive }) => isActive ? 'active' : undefined} text-decoration-none text-white px-2 py-1 fw-semibold me-4`}
                                to={navLink.toLowerCase()}
                            >{navLink}</NavLink>)
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;