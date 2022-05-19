import React,{ useState ,useEffect} from 'react'
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {

    const [show, setShow] = useState(true);
    const [opcionRegistro, setOpcionRegistro] = useState(false);
    const [menu, setMenu] = useState(false);
    const [opcionEmerg, setOpcionEmer] = useState(true);
    const [opcionEmergA, setOpcionEmerA] = useState(true);
    const [index, setIndex] = useState(true);
    useEffect(() => {
        
        if(sessionStorage.getItem('token')){
            
            setMenu(true);
            setShow(false);
            setOpcionRegistro(true);
            setOpcionEmer(false);
            setOpcionEmerA(true);
        }
        if(sessionStorage.getItem('rol') === '1'){
            setMenu(true);
            setShow(false);
            setOpcionRegistro(true);
            setOpcionEmer(true);
            setOpcionEmerA(false);
            
        }

        
    }, []);
    
    
    const salir = () => {
        sessionStorage.clear();
        window.location.href = '/';
    }
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            
                <Container>

                    <Navbar.Brand   href="/Index">Infocast</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                    
                        <Nav className="me-auto">
                            
                            <Nav.Link hidden={show}  href="/Index">Inicio</Nav.Link>

                            <Nav.Link hidden={opcionEmerg} href="/verEmergencias">Ver Alertas</Nav.Link>
                            <Nav.Link hidden={opcionEmergA} href="/verEmergenciasA">Ver Alertas ADM</Nav.Link>
                            <Nav.Link hidden={show} href="/crearEmergencias">Crear Emergencias</Nav.Link>
                            <Nav.Link hidden={opcionRegistro} style={{color: '#FFF',textDecoration:'none'}}href="/registrar" ><i className='fas fa-user-plus'></i>Registrarse</Nav.Link>
                            <Nav.Link hidden={opcionRegistro} style={{color: '#FFF',textDecoration:'none'}}href="/login" ><i className='fas fa-user-plus'></i>Login</Nav.Link>
                            <NavDropdown hidden={show} title="Emergencias" id="collasible-nav-dropdown">

                                <NavDropdown.Item href="/verEmergencias">Ver emergencias</NavDropdown.Item>

                                <NavDropdown.Item href="#action/3.2">Crear emergencia</NavDropdown.Item>

                                <NavDropdown.Item  href="#action/3.3">Something</NavDropdown.Item>

                                <NavDropdown.Divider />

                                <NavDropdown.Item   href="#action/3.4">Ver Reportes</NavDropdown.Item>

                            </NavDropdown>

                        </Nav>

                        <Nav>

                            <Nav.Link hidden={show}  href="#deets"> Mi Perfil</Nav.Link>

                            <Nav.Link hidden={show} onClick={()=>salir()}  href="/Login">

                                Cerrar Sesion

                            </Nav.Link>

                        </Nav>

                    </Navbar.Collapse>

                </Container>

            </Navbar>

        </div>
    )
}
