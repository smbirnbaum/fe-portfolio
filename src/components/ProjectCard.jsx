function ProjectCard(props) {
  return (
    <article className="project-card" onClick={props.openPopup}>
      <img 
        src={props.screenshot} 
        alt={props.name}
        className="project-image"
      />

      <div className="project-content">
        <h3>{props.name}</h3>

        <p className="tech">
          <strong>Tech used:</strong> {props.techUsed}
        </p>

        <p>{props.shortWriteUp}</p>

        <button className="details-button">
          View Project Details
        </button>
      </div>
    </article>
  )
}

export default ProjectCard