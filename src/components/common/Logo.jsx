import { Link } from 'react-router-dom'
import { mediaUrl } from '../../data/siteData'

function Logo({ small = false }) {
  return <Link className={`logo ${small ? 'small' : ''}`} to="/">
    <img src={`${mediaUrl}Logo-2-1-png.webp`} alt="Aladdin Shawarma" />
  </Link>
}

export default Logo
