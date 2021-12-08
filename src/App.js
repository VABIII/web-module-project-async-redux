import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import CharacterList from "./components/CharacterList";



function App() {
    const [characters, setCharacters] = useState([])
    console.log(characters)

    useEffect(() => {
        axios.get(` https://rickandmortyapi.com/api/character`)
            .then(res => {
                setCharacters(res.data.results)
            })
            .catch(err => {
                console.error(err)
            })
    },[])



    return (
    <div className="App">
      <h1>You Son Of A Bitch, I'm In!</h1>
        <h4>Async Redux Project</h4>
        <CharacterList characters={characters}/>
    </div>
  );
}

export default App;