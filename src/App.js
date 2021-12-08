import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import CharacterList from "./components/CharacterList";
import {connect} from "react-redux";
import {fetchSuccess, fetchFail, fetchStart, getChars} from "./actions";


function App(props) {

    useEffect(() => {
       props.getChars()

    },[])

    return (
    <div className="App">
      <h1>You Son Of A Bitch, I'm In!</h1>
        <h4>Async Redux Project</h4>
        <div className="char-list">
            <CharacterList />
        </div>
    </div>
  );
}

const  mapStateToProps = state => {
    return({
        characters: state.characters
    })
}

export default  connect(mapStateToProps, { fetchStart, fetchSuccess, fetchFail, getChars })(App);






