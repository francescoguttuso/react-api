import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./components/Card";
import "./App.css";

function App() {
  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        setLoading(true);

        const [resActors, resActresses] = await Promise.all([
          axios.get("https://lanciweb.github.io/demo/api/actors/"),
          axios.get("https://lanciweb.github.io/demo/api/actresses/"),
        ]);

        console.log("Dati Attori dall'API:", resActors.data);
        console.log("Dati Attrici dall'API:", resActresses.data);

        setActors(resActors.data);
        setActresses(resActresses.data);
      } catch (error) {
        console.error("Errore durante il recupero dei dati:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPeople();
  }, []);

  useEffect(() => {
    if (actors.length > 0) {
      console.log("Stato 'actors' aggiornato con successo:", actors);
    }
    if (actresses.length > 0) {
      console.log("Stato 'actresses' aggiornato con successo:", actresses);
    }
  }, [actors, actresses]);

  if (loading) return <p>Caricamento in corso...</p>;

  return (
    <div>
      <h1>Cineteca React</h1>
      <p>Lista di attori e attrici con info in card</p>
      <h2>Attori</h2>
      <div className="cards-grid">
        {actors.map((actor) => (
          <Card
            key={actor.id}
            name={actor.name}
            birth_year={actor.birth_year}
            nationality={actor.nationality}
            awards={actor.awards}
            biography={actor.biography}
            image={actor.image}
            known_for={actor.known_for}
          />
        ))}
      </div>

      {/* Sezione Attrici*/}
      <h2>Attrici</h2>
      <div className="cards-grid">
        {actresses.map((actress) => (
          <Card
            key={actress.id}
            name={actress.name}
            birth_year={actress.birth_year}
            nationality={actress.nationality}
            awards={actress.awards}
            biography={actress.biography}
            image={actress.image}
            known_for={actress.known_for}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
