import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";




function App() {
    const [characters, setCharacters] = useState([])
    console.log(characters)
    useEffect(() => {
        axios.get(` https://rickandmortyapi.com/api/character`)
            .then(res => {
                console.log(res.data.results)
                setCharacters(res.data.results)

            })

            .catch(err => {
                console.error(err)
            })


    }, [])



    return (
    <div className="App">
      <h1>You Son Of A Bitch, I'm In!</h1>
        <h4>Async Redux Project</h4>
    </div>
  );
}

export default App;