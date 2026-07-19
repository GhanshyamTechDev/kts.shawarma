import { NavLink } from 'react-router-dom'
import Logo from '../common/Logo'

function Header() {
  return <header className="header">
    <Logo />
    <nav aria-label="Main navigation">
      <NavLink to="/">Home</NavLink><a href="/#story">Story</a><a href="/#flavours">Menu</a>
      <a href="/#partner">Services</a><a href="/#outlets">Visit Us</a><a href="/#contact">Contact</a>
    </nav>
    <NavLink to="/order-now" className="order">Order now</NavLink>
  </header>
}

export default Header
