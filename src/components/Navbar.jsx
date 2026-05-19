import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Shawna</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/game">Game</Link>
      </div>
    </nav>
  )
}

export default Navbar