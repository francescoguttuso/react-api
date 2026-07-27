import "./Card.css";

export const Card = (props) => {
  const formattedKnownFor = Array.isArray(props.known_for)
    ? props.known_for.join(", ")
    : props.known_for;

  const formattedAwards = Array.isArray(props.awards)
    ? props.awards.join(", ")
    : props.awards;
  return (
    <div className="card-actor">
      <div className="card-image-container">
        <img src={props.image} alt={props.name} className="card-image" />
      </div>

      <div className="card-content">
        <h2 className="card-name">{props.name}</h2>
        <p className="card-info">
          <strong>Nascita:</strong> {props.birth_year} |{" "}
          <strong>Nazionalità:</strong> {props.nationality}
          <strong> Riconoscimenti:</strong> {formattedAwards}
        </p>

        <p className="card-bio">{props.biography}</p>

        <div className="card-known-for">
          <strong>Famoso/a per:</strong> {formattedKnownFor}
        </div>
      </div>
    </div>
  );
};
