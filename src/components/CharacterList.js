import React from "react";
import Character from "./Character";
import {connect} from "react-redux";


const CharacterList = props => {

    return (
        <div>
            {
                props.characters.map( (char, i) => {
                  return (
                    <div className="char-list" key={i}>
                        <Character  key={char.id} char={char}/>
                    </div>
                  )
                })
            }
        </div>
    );
};


const  mapStateToProps = state => {
    return({
        characters: state.characters
    })
}


export default connect(mapStateToProps)(CharacterList);














































