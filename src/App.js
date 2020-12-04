import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state ={
    userInput: ''
  }

  inputChangedHandler = (e) => {
    this.setState({userInput: e.target.value});
  }

  deleteCharHandler = i => {
    const text = this.state.userInput.split('');
    text.splice(i, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }


  render() {

    const charList = this.state.userInput.split('').map((ch, i) => {
      return <Char character={ch} key={i} clicked={() => this.deleteCharHandler(i)}/>
    });


    return (
      <div className="App">
        <input 
          type="text" 
          onChange={this.inputChangedHandler} 
          value={this.state.userInput} 
        />
        <p>{this.state.userInput}</p>
        <Validation 
          inputLength={this.state.userInput.length}
        />
        {charList}
      </div>
    );
  }
}

export default App;
