import { useState, useEffect } from "react";
import axios from "axios";
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
      <p>Controlla la console del browser (F12) per vedere le liste!</p>
    </div>
  );
}

export default App;
