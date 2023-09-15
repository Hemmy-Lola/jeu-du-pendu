import React from 'react'
import './App.css'

const Keyboard = ({alphabet, action}) => {

    return(
        <div>
           {
            alphabet.map(
                (letter, key) => {
                    
                    return <button
                         key={"keyboard_"+key}
                         onClick={ () => action(letter)}
                         >{letter}</button>
                }
            )
           }
        </div>
    )
}

export default Keyboard