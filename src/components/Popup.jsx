function Popup(props) {
  return (
    <div className="popup-background" onClick={props.closePopup}>
      <div className="popup-box" onClick={(event) => event.stopPropagation()}>
        <button className="popup-close" onClick={props.closePopup}>
          ×
        </button>

        <img 
          src={props.screenshot} 
          alt={props.name}
          className="popup-image"
        />

        <h2>{props.name}</h2>

        <p>
          <strong>Tech used:</strong> {props.techUsed}
        </p>

        <p>{props.shortWriteUp}</p>

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

        <a href={props.githubRepo} target="_blank">
          View GitHub repo
        </a>
      </div>
    </div>
  )
}

export default Popup