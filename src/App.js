import React, { Component } from 'react';
import Dropdown from './Dropdown.js';
import FlashcardForm from './FlashcardForm.js'; 
import './App.css';

class App extends Component {

  state = {
    flashcards: [
      {id: 1, name: "2 + 2", value: "4"},
      {id: 2, name: "3 + 3", value: "6"},
      {id: 3, name: "4 + 4", value: "8"},
      {id: 4, name: "5 + 5", value: "10"},
      {id: 5, name: "6 + 6", value: "12"},
      {id: 6, name: "7 + 7", value: "14"},
      {id: 7, name: "8 + 8", value: "16"},
  ]
  }

  handleClick = (id) => {
    const { flashcards } = this.state 
    this.setState({
      flashcards: flashcards.map( flashcard => {
        if (flashcard.id === id) {
          return {
            ...flashcard,
          }
        }

        return flashcard 
      })
    })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Flashcards-in-react">React Flashcards</h1>
        </header>
        <div>
          <FlashcardForm /> 
          <Dropdown 
          name="Flashcard Dropdown" 
          items = {this.state}
          OptionClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
