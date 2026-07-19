import { Link } from 'react-router-dom'
import ktsLogo from '../../assets/kts-logo.svg'

function Logo({ small = false }) {
  return <Link className={`logo ${small ? 'small' : ''}`} to="/">
    <img src={ktsLogo} alt="KT's Shawarma & Grill" />
  </Link>
}

export default Logo
