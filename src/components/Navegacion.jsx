// import logo from '/LogoTG.png'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Navegacion = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      sticky="top"
    >
      <Navbar.Brand href="/">
        <img src="/LogoTG.png" alt="Logo Tg transfers" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-3" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          onSelect={(selectedKey) => navigate(selectedKey)}
          className="me-auto"
        >
          <Nav.Link eventKey="/moreno" className="links ms-3">
            {t("nav_moreno")}
          </Nav.Link>
          <Nav.Link eventKey="/chalten" className="links ms-3">
            {t("nav_chalten")}
          </Nav.Link>
          <Nav.Link eventKey="/austral" className="links ms-3">
            {t("nav_austral")}
          </Nav.Link>
          <Nav.Link
            eventKey="/inicio"
            href="https://wa.me/message/3AYMG447FQRYN1"
            className="links ms-3"
            target="_blanck"
          >
            {t("nav_info")}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegacion;
