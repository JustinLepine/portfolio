import { useResizeDebounce } from '../../hooks/useResizeDebounce'
import { Link } from 'react-router-dom'
import { Menu } from './Menu'
import logoImg from '../../assets/nav/nav-logo.png'

export default function Nav() {
  const { innerWidth } = useResizeDebounce()

  return (
    <nav className='nav' id='nav'>
      <Link to={'/'}>
        <img src={logoImg} className='nav_logo' alt='logo' />
      </Link>
      <Menu mobileWidth={ innerWidth <= 600 } />
    </nav>
  )
}
