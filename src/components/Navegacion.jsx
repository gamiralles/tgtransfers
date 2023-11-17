import logo from '/LogoTG.png'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navegacion = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top">
        <Navbar.Brand href="/"><img src={logo} alt="Logo Tg transfers" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/moreno"} className='links'>
            <Nav.Link href="/">Glaciar Perito Moreno</Nav.Link>
            </Link>
            <Link to={"/chalten"} className='links' >
            <Nav.Link href="/">El Chaltén</Nav.Link>
            </Link>
            <Link to={"/austral"} className='links' >
            <Nav.Link href="/">Carretera Austral</Nav.Link>
            </Link>
            <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLSf73H_j8COcBgdQ5-fMdGhfTslY5d0Dlr7o-o_DJszj3YSO5A/viewform" target="_blank">Mas Servicios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navegacion;
