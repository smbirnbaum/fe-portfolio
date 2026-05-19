import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  function handleRegister(event) {
    event.preventDefault()

    if (username.trim() === '' || password.trim() === '') {
      setMessage('Please enter both a username and password.')
      return
    }

    if (password.length < 8) {
      setMessage('Password must be at least 8 characters.')
      return
    }

    const player = {
      username: username,
      password: password
    }

    localStorage.setItem('player', JSON.stringify(player))
    localStorage.setItem('isLoggedIn', 'false')

    setMessage('Registration successful! Redirecting to login...')

    setTimeout(function() {
      navigate('/login')
    }, 1000)
  }

  return (
    <main>
      <section className="auth-page">
        <h1>Register</h1>

        <p>
          Create an account to access the minigame.
        </p>

        <form className="auth-form" onSubmit={handleRegister}>
          <label htmlFor="register-username">Username</label>
          <input
            id="register-username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter username"
          />

          <label htmlFor="register-password">Password</label>
          <input
            id="register-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
          />

          <button type="submit">
            Register
          </button>
        </form>

        {message && <p className="auth-message">{message}</p>}
      </section>
    </main>
  )
}

export default Register