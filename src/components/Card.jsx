import "./Card.css";
export const Card = (props) => {
  return (
    <div className="card-actors">
      <h2>{props.name}</h2>
      <p>{props.birth_year}</p>
      <p>{props.nationality}</p>
      <p>{props.biography}</p>
      <img src={props.image} alt={props.name} />
      <p>{props.known_for}</p>
      <h2>{props.title}</h2>
    </div>
  );
};
