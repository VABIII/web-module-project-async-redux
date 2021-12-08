import React from "react";


const Character = props => {
   const {char} = props
    console.log(char)

    return (
        <div>
            <div>
                <img src={char.image} alt=""/>
            </div>
            <div>
                <h3>{char.name}</h3>
            </div>
        </div>
    );
};

export default Character;














































