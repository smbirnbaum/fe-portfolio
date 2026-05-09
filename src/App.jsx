import './App.css'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import Footer from './components/Footer'

import htmlCssScreenshot from './assets/shot1.png'
import bookTrackerScreenshot from './assets/shot2.png'
import typingGameScreenshot from './assets/shot3.png'

function App() {
  return (
    <div className="page">
      <Header />

      <main>
        <section className="intro">
          <h2>My Projects</h2>
          <p>
            blabla
          </p>
        </section>

        <section className="projects">
          <ProjectCard
            name="HTML and CSS Portfolio Page"
            screenshot={htmlCssScreenshot}
            githubRepo="https://github.com/smbirnbaum/fe-portfolio"
            techUsed="HTML, CSS, Flexbox"
            shortWriteUp="blabla"
            whatItDoes="blabla"
            whatILearned="blabla"
            role="Solo project"
            challengesSolved="blabla"
          />

          <ProjectCard
            name="Book Tracker"
            screenshot={bookTrackerScreenshot}
            githubRepo="https://github.com/smbirnbaum/fe-portfolio"
            techUsed="HTML, CSS, JavaScript"
            shortWriteUp="blabla"
            whatItDoes="blabla"
            whatILearned="blabla"
            role="Solo project"
            challengesSolved="blabla"
          />

          <ProjectCard
            name="Typing Game"
            screenshot={typingGameScreenshot}
            githubRepo="https://github.com/smbirnbaum/fe-portfolio"
            techUsed="HTML, CSS, JavaScript, DOM"
            shortWriteUp="blabla"
            whatItDoes="blabla"
            whatILearned="blabla"
            role="Solo project"
            challengesSolved="blabla"
          />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App