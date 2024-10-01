import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function MainMenu({mainMenu, articlesMenu}){

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#"><Link href={'/'}>Curabitur</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0" >

                        {mainMenu.map((link)=>{
                            return (
                                <Nav.Link key={link.href} href={link.href}>{link.title}</Nav.Link>
                            );})
                        }
                        <NavDropdown title="Articles" id="navbarScrollingDropdown">

                            {articlesMenu.map((link)=>{
                                return (
                                    <NavDropdown.Item key={link.href} href={link.href}>{link.title}</NavDropdown.Item>
                                );})
                            }

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
