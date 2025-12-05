import logo from './logo.png';
import { Link } from 'react-router-dom';
function Header() {
    return (
    <header className='header'> 
      <div className='header-left'>
          <img className='logo' src= {logo} alt="Little Lemon Logo" />
      </div>

      <nav className='nav'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order-online">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
    </header>
    )
}
export default Header;