import { Link } from 'react-router-dom'
import JokeGame from '../components/JokeGame'

function Game() {
  const isLoggedIn = localStorage.getItem('isLoggedIn')

  if (isLoggedIn !== 'true') {
    return (
      <main>
        <section className="auth-page">
          <h1>Login Required</h1>

          <p>
            Please log in before playing the minigame.
          </p>

          <Link className="auth-link-button" to="/login">
            Go to Login
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main>
      <JokeGame />
    </main>
  )
}

export default Game