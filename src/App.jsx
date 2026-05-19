import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Game from './pages/Game'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/game" element={<Game />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App