import React from 'react'
import './App.css'

const CurrentWord = ({currentWord}) => {

    return(
        <div>
          {
          currentWord.split('').map(
            (letter, key) => {

                let status = "finded"
                return <span key={"letter_" + key} className={status} >{letter}</span>
            }
          )
          }
        </div>
    )
}

export default CurrentWord