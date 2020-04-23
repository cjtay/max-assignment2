import React, { Component } from 'react';
import Validation from './components/Validation';
import Char from './components/Char';

import './App.css';

class App extends Component {
    state = {
        userInput: '',
        textLength: '',
    };
    inputChangeHandler = (e) => {
        this.setState({ userInput: e.target.value });
    };

    deleteHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({ userInput: updatedText });
    };

    render() {
        const charList = this.state.userInput.split('').map((char, index) => {
            return (
                <Char
                    character={char}
                    key={index}
                    click={() => this.deleteHandler(index)}
                />
            );
        });
        // text field is not an array, cannot apply map() directly. Hence apply split('') to convert string into a proper array first before using map()

        return (
            <div className="App">
                <h1> Max React Assignment 2</h1>
                <input
                    type="text"
                    onChange={this.inputChangeHandler}
                    value={this.state.userInput}
                />
                <p>Input: {this.state.userInput}</p>
                <p>Text length: {this.state.userInput.length}</p>
                <Validation textLength={this.state.userInput.length} />
                {charList}
            </div>
        );
    }
}

export default App;
