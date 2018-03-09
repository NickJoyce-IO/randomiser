import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { quote : 'This is a random quote just to get you started' };
    this.randomQuote = this.randomQuote.bind(this);
  }
    randomQuote() {
    const quotes = [
      'This is a new quote, displayed by the quote randomiser 1.',
      'This is a new quote, displayed by the quote randomiser 2.',
      'This is a new quote, displayed by the quote randomiser 3.',
      'This is a new quote, displayed by the quote randomiser 4.',
      'This is a new quote, displayed by the quote randomiser 5.'
    ];
    var randNum = Math.floor(Math.random() * (quotes.length)) + 0;
    this.setState({ quote: quotes[randNum]});
  };
  render() {

    return (
      <div>
        <div className="card">
        <div className="card-block">
        <h4 className="card-title">Quote Randomiser</h4>
        <p className="card-text">{this.state.quote}</p>
        <h6 className="card-subtitle mb-2 text-muted">- Author</h6>
      <button onClick={this.randomQuote}  className="btn btn-primary">New Quote</button>
  </div>
</div>
</div>

      
      
    );
  }
}

export default App;
