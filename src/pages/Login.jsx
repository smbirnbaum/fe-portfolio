import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  function handleLogin(event) {
    event.preventDefault()

    const savedPlayer = JSON.parse(localStorage.getItem('player'))

    if (!savedPlayer) {
      setMessage('No account found. Please register first.')
      return
    }

    if (username === savedPlayer.username && password === savedPlayer.password) {
      localStorage.setItem('isLoggedIn', 'true')
      navigate('/game')
    } else {
      setMessage('Wrong username or password.')
    }
  }

  return (
    <main>
      <section className="auth-page">
        <h1>Login</h1>

        <p>
          Log in to play the minigame.
        </p>

        <form className="auth-form" onSubmit={handleLogin}>
          <label htmlFor="login-username">Username</label>
          <input
            id="login-username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter username"
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
          />

          <button type="submit">
            Login
          </button>
        </form>

        {message && <p className="auth-message error">{message}</p>}
      </section>
    </main>
  )
}

export default Login