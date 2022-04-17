import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../resources/logo/logo.png'
import CustomLink from '../../../Utilities/CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            {/* <p>this is header page</p> */}

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className='d-flex align-items-center' href="#home">
                        <img alt=""src={logo} width="100" height="45" className="d-inline-block align-top"
                        />
                        
                        
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end align-items-center">
                        <Nav className='menu-links'>
                            

                            <CustomLink to={'./'}>Home</CustomLink>
                            <CustomLink to={'./about-me-details'}>About Me</CustomLink>
                            <CustomLink to={'./packages'}>Package's</CustomLink>
                            <CustomLink to={'./gallery'}>Gallery</CustomLink>
                            <CustomLink to={'./frequenty-asked-questions'}>FAQ</CustomLink>
                            <CustomLink to={'./contract'}>Contract</CustomLink>
                            <CustomLink to={'./login'}>Login</CustomLink>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;