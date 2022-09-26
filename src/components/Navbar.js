import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className='nav-bar'>
      <div className='logo'>
        <img src='/images/Logo-9 1.png' className='nav-logo' alt='Logo' />
      </div>
      <div className='nav-link-group'>
        <Link className='nav-link'> Home</Link>
        <Link className='nav-link'>About Us</Link>
        <Link className='nav-link'>Our Work</Link>
        <Link className='nav-link'>Let's Talk</Link>
      </div>
    </nav>
  );
}

export default Navbar;
