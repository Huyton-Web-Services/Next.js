import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";

export function MainMenu({mainMenu, articlesMenu}){
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/">Curabitur</Navbar.Brand>
                <Navbar.Toggle aria-controls="mainMenuScroll" />
                <Navbar.Collapse id="mainMenuScroll">
                    <Nav className="ms-auto my-2 my-lg-0" >
                        {mainMenu.map((link)=>{
                            return (
                                <Link key={link.href} href={link.href} passHref>
                                    <Nav.Link as="span">{link.title}</Nav.Link>
                                </Link>
                            );})
                        }
                        <NavDropdown align="end" title="Articles" id="mainMenuDropdown">
                            {articlesMenu.map((link)=>{

                                return (
                                    <Link key={link.href} href={link.href} passHref>
                                        <NavDropdown.Item as="span">{link.title}</NavDropdown.Item>
                                    </Link>
                                );})
                            }
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
