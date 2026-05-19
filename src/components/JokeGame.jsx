import { useEffect, useState } from 'react'

function JokeGame() {
  const [joke, setJoke] = useState(null)
  const [guess, setGuess] = useState('')
  const [showPunchline, setShowPunchline] = useState(false)
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(true)

  function getJoke() {
    setLoading(true)
    setShowPunchline(false)
    setGuess('')

    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        setJoke(data)
        setLoading(false)
      })
      .catch(function(error) {
        console.log(error)
        setLoading(false)
      })
  }

  useEffect(function() {
    getJoke()
  }, [])

  function revealPunchline() {
    setShowPunchline(true)

    if (guess.trim() !== '') {
      setScore(score + 1)
    }
  }

  return (
    <section className="joke-game">
      <h1>Joke Guessing Game</h1>

      <p>
        Read the joke setup, guess the punchline, then reveal the real answer.
      </p>

      <p className="score">
        Score: {score}
      </p>

      {loading && <p>Loading joke...</p>}

      {!loading && joke && (
        <div className="joke-card">
          <h2>{joke.setup}</h2>

          <label htmlFor="guess">Your punchline guess</label>

          <input
            id="guess"
            type="text"
            value={guess}
            onChange={(event) => setGuess(event.target.value)}
            placeholder="Type your guess here..."
          />

          <div className="joke-buttons">
            <button onClick={revealPunchline}>
              Reveal Punchline
            </button>

            <button onClick={getJoke}>
              New Joke
            </button>
          </div>

          {showPunchline && (
            <div className="punchline-box">
              <p>
                <strong>Your guess:</strong> {guess || 'No guess entered'}
              </p>

              <p>
                <strong>Real punchline:</strong> {joke.punchline}
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default JokeGame