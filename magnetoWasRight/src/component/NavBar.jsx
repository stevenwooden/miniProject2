import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MWRLOGOcolordark from '../assets/images/MWRLOGOcolordark.png'
import {NavLink} from 'react-router-dom';
function NavBar(){

    return(
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as = {NavLink} to = '/'><img src= {MWRLOGOcolordark} alt='dark logo' width={175} /></Navbar.Brand>
                <Nav className="nav justify-content-end">
                    <Nav.Link as = {NavLink} to = '/' >Home</Nav.Link>  
                    <Nav.Link as = {NavLink} to = '/character-bio'>CharacterBio</Nav.Link>
                    <Nav.Link as = {NavLink} to = '/blog'>Blog</Nav.Link>
                    <Nav.Link as = {NavLink} to = '/shop'>Shop</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar