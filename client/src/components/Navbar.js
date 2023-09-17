import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';

function WebsiteNavbar() {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link href="/" className="header-link">About</Nav.Link>
                    <Nav.Link href="/projects" className="header-link">Projects</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="https://github.com/Angeloffpm">
                        <Image src="./images/github-icon.png" height={30}></Image>
                    </Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/feed/">
                        <Image src="./images/linkedinwhite.png" height={30}></Image>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
  }

export default WebsiteNavbar;