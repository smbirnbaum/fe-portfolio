import Header from '../components/Header'

function Home() {
  return (
    <main>
      <Header />

      <section className="intro">
        <h2>Welcome</h2>
        <p>
          This portfolio shows a few projects I created while learning front-end development.
        </p>
      </section>
    </main>
  )
}

export default Home