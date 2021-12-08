import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import CharacterList from "./components/CharacterList";
import {connect} from "react-redux";
import {getChars} from "./actions";
import Header from "./components/Header";

function App(props) {

    useEffect(() => {
       props.getChars()
    },[])

    return (
    <div className="App">
        <Header/>
        <CharacterList />
    </div>
  );
};

export default  connect(null, {  getChars })(App);






