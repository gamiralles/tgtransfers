import logo from '/LogoTG.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
<nav class="navbar-expand-lg bg-body-tertiary">
  <div className='navbar container-fluid'>
  <div class="container-fluid">
    <Link to={"/"}>
      <img src={logo} className='img-fluid'  alt="" />
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to={'/moreno'} className='nav-link'>Glaciar Perito Moreno</Link>
        </li>
        <li class="nav-item">
          <Link to={"/chalten"} className='nav-link'>El Chalten</Link>
        </li>
        <li class="nav-item">
          <Link to={'/austral'} className='nav-link'>Carretera Austral</Link>
        </li>
        <li class="nav-item">
          <a className='nav-link' href="https://docs.google.com/forms/d/e/1FAIpQLSfcimB2l_RUJgqY_ekluECH5jIKrXByOYz_nIb052ef8tLJFA/viewform" target="_blank">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
  </div>
</nav>
    )
}

export default Navbar
