import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [actors, setActors] = useState([]);
  useEffect(() => {
    axios
      .get("https://lanciweb.github.io/demo/api/actors/")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return <></>;
}

export default App;
