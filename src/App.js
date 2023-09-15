import React, { Component } from 'react'
import './App.css'
import Keyboard from './Keyboard'
import CurrentWord from './CurrentWord'

class App extends Component {

  state = {
    wordCollection:["react","entrainement","bachelor","fullstack","github","alternance"],
    currentWord:null,
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split(''),
    usedLetter:[],
    win:0, // 0 : neutre | -1 perdu | 1 gagné
    attempt:0
  }

  componentDidMount(){
    this.initGame()
  }

clickLetter = (letter) => {
  console.log("=>" +letter)

  if(this.state.usedLetter.indexOf(letter) === -1) {

    const usedLetter = [letter, ...this.state.usedLetter]

    this.setState({usedLetter})
  }else {
    console.log("la lettre à déjà été tapé")
  }

  // nombre de tentative : décrémenter
// si la lettre fait partie du mot 
// ->affichage lettre 
// ->changement d'état
// ->gagner ou pas gagner
  // si la lettre fait parti du mot
}

  initGame = () => {

    this.setState({currentWord:"fullstack"})

  }

  render() {
    return (
      <div id="jeu">
        <h1>Jeu du pendu</h1>
        <div>{this.state.currentWord}</div>
      {
        (this.state.currentWord !== null ) && 
        <CurrentWord 
        currentWord={this.state.currentWord}
        usedLetter={this.usedLetter}
           />
        
      }  
        <Keyboard 
        alphabet={this.state.alphabet}
        action={this.clickLetter}
        />
      </div>
      
    )
  }
}

export default App;
