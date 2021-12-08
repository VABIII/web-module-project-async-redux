import React from "react";
import "./Character.css"

const Character = props => {
   const { char } = props
    console.log(char)

    return (
        <div className="char-container">
            <div className="img-div">
                <img src={char.image} alt=""/>
            </div>
            <div className="char-info">
                <h3>{char.name}</h3>
            </div>
        </div>
    );
};

export default Character;














































