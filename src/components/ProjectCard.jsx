import { useState } from 'react'

function ProjectCard(props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <article className="project-card">
        <img 
          src={props.screenshot} 
          alt={props.name}
          className="project-image"
          onClick={() => setIsOpen(true)}
        />

        <div className="project-content">
          <h3>{props.name}</h3>

          <p className="tech">
            <strong>Tech used:</strong> {props.techUsed}
          </p>

          <p>{props.shortWriteUp}</p>

          <div className="project-details">
            <p>
              <strong>What the project does:</strong> {props.whatItDoes}
            </p>

            <p>
              <strong>What I learned:</strong> {props.whatILearned}
            </p>

            <p>
              <strong>My role:</strong> {props.role}
            </p>

            <p>
              <strong>Challenges I solved:</strong> {props.challengesSolved}
            </p>
          </div>

          <a href={props.githubRepo} target="_blank">
            View GitHub repo
          </a>
        </div>
      </article>

      {isOpen && (
        <div className="image-modal" onClick={() => setIsOpen(false)}>
          <button className="close-button" onClick={() => setIsOpen(false)}>
            ×
          </button>

          <img 
            src={props.screenshot} 
            alt={props.name}
            className="modal-image"
          />
        </div>
      )}
    </>
  )
}

export default ProjectCard