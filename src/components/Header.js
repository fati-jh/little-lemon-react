import logo from './logo.png'
function Header() {
    return (
    <header className='header'> 
      <div className='header-left'>
          <img className='logo' src= {logo} alt="Little Lemon Logo" />
      </div>

      <nav className='nav'>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/reservationst">Reservations</a></li>
        <li><a href="/order-online">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
    </header>
    )
}
export default Header;