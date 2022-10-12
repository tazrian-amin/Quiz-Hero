import logo from '../../logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
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
                        <Link className='text-decoration-none text-white me-4' to="/home">Home</Link>
                        <Link className='text-decoration-none text-white me-4' to="/topics">Topics</Link>
                        <Link className='text-decoration-none text-white me-4' to="/statistics">Statistics</Link>
                        <Link className='text-decoration-none text-white me-4' to="/blog">Blog</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;