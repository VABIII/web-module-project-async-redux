import React from "react";
import Character from "./Character";



const CharacterList = props => {
    const {characters} = props

    return (
        <div>
            {
                characters.map( (char, i) => {
                  return   <Character key={i} char={char}/>
                })
            }
        </div>
    );
};

export default CharacterList;














































