import React from "react";
import Character from "./Character";



const CharacterList = props => {
    const {characters} = props

    return (
        <div>
            {
                characters.map( char => {
                  return   <Character key={char.id} char={char}/>
                })
            }
        </div>
    );
};

export default CharacterList;














































