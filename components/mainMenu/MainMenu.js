import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
                                <Nav.Link key={link.href} href={link.href}>{link.title}</Nav.Link>
                            );})
                        }
                        <NavDropdown align="end" title="Articles" id="mainMenuDropdown">
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
