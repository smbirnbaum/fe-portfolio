import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import Popup from '../components/Popup'

import htmlCssScreenshot from '../assets/css-project.png'
import bookTrackerScreenshot from '../assets/book.png'
import typingGameScreenshot from '../assets/type.png'

function Portfolio() {
  const [showProjects, setShowProjects] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      name: 'Sass Styling Project',
      screenshot: htmlCssScreenshot,
      githubRepo: 'https://github.com/smbirnbaum/sass-assignment',
      techUsed: 'HTML, CSS, Sass',
      shortWriteUp: 'This project focused on using Sass to organize and style a web page more efficiently.',
      whatItDoes: 'The page displays structured content with custom styling created through Sass and compiled into CSS.',
      whatILearned: 'I learned how Sass variables and nested styling can make CSS easier to organize and maintain.',
      role: 'Solo project',
      challengesSolved: 'I practiced compiling Sass into CSS, connecting the stylesheet correctly, and fixing layout and styling issues.'
    },
    {
      name: 'Book Tracker',
      screenshot: bookTrackerScreenshot,
      githubRepo: 'https://github.com/smbirnbaum/js-lesson-6',
      techUsed: 'HTML, CSS, JavaScript',
      shortWriteUp: 'This project focused on creating a simple app for adding and displaying books.',
      whatItDoes: 'The app lets a user enter a book title and author, then shows the book on the page.',
      whatILearned: 'I learned how to collect input values, store them in an array, and update the DOM with JavaScript.',
      role: 'Solo project',
      challengesSolved: 'I practiced connecting form elements to JavaScript and fixing issues with displaying new books on the page.'
    },
    {
      name: 'Typing Game',
      screenshot: typingGameScreenshot,
      githubRepo: 'https://github.com/smbirnbaum/js-lesson-7',
      techUsed: 'HTML, CSS, JavaScript, DOM',
      shortWriteUp: 'This project was a typing game where the user types the correct word before the timer runs out.',
      whatItDoes: "The game shows a random word, checks the user's input, updates the score, and counts down the timer.",
      whatILearned: 'I learned how to use event listeners, functions, timers, and DOM updates to create interactive behavior.',
      role: 'Solo project',
      challengesSolved: 'I practiced creating timer logic, resetting input fields, updating the score, and showing a game over message.'
    }
  ]

  function openPopup(project) {
    setSelectedProject(project)
  }

  function closePopup() {
    setSelectedProject(null)
  }

  return (
    <main>
      <section className="intro">
        <h1>Portfolio</h1>
        <p>
          Click the button below to preview my front-end development projects.
        </p>

        <button 
          className="preview-button"
          onClick={() => setShowProjects(!showProjects)}
        >
          {showProjects ? 'Hide Projects' : 'Show Projects'}
        </button>
      </section>

      {showProjects && (
        <section className="projects">
          {projects.map(function(project) {
            return (
              <ProjectCard
                key={project.name}
                name={project.name}
                screenshot={project.screenshot}
                githubRepo={project.githubRepo}
                techUsed={project.techUsed}
                shortWriteUp={project.shortWriteUp}
                whatItDoes={project.whatItDoes}
                whatILearned={project.whatILearned}
                role={project.role}
                challengesSolved={project.challengesSolved}
                openPopup={() => openPopup(project)}
              />
            )
          })}
        </section>
      )}

      {selectedProject && (
        <Popup
          name={selectedProject.name}
          screenshot={selectedProject.screenshot}
          githubRepo={selectedProject.githubRepo}
          techUsed={selectedProject.techUsed}
          shortWriteUp={selectedProject.shortWriteUp}
          whatItDoes={selectedProject.whatItDoes}
          whatILearned={selectedProject.whatILearned}
          role={selectedProject.role}
          challengesSolved={selectedProject.challengesSolved}
          closePopup={closePopup}
        />
      )}
    </main>
  )
}

export default Portfolio