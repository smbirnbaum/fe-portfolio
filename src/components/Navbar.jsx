import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Shawna</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>

        <div className="dropdown">
          <button className="dropdown-button">
            Game ▾
          </button>

          <div className="dropdown-menu">
            <Link to="/game">Play Game</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar