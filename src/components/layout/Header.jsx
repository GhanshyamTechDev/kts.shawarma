import { NavLink } from 'react-router-dom'
import Logo from '../common/Logo'

function Header() {
  return <header className="header">
    <Logo />
    <nav aria-label="Main navigation">
      <NavLink to="/">Home</NavLink><a href="#story">Story</a><a href="#flavours">Menu</a>
      <a href="#partner">Partner with us</a><a href="#outlets">Outlets</a><a href="#contact">Contact</a>
    </nav>
    <a href="#outlets" className="order">Order now</a>
  </header>
}

export default Header
