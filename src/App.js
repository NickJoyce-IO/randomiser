import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: 'This is a random quote just to get you started', color: 'white' };
    this.randomQuote = this.randomQuote.bind(this);
  }
  randomQuote() {
    const quotes = [
      'Why are there no free range chickens, this has ruined my weekend!',
      'This is a new quote, displayed by the quote randomiser 2.',
      'This is a new quote, displayed by the quote randomiser 3.',
      'This is a new quote, displayed by the quote randomiser 4.',
      'This is a new quote, displayed by the quote randomiser 5.'
    ];
    
    const colors = [
      '#39CCCC',
      '#85144b',
      '#FF4136',
      '#7FDBFF',
      '#3D9970'
    ];

    var randNum = Math.floor(Math.random() * (quotes.length)) + 0;
    var randNum2 = Math.floor(Math.random() * (colors.length)) + 0;
    this.setState({ quote: quotes[randNum]});
    document.body.style.backgroundColor = colors[randNum2];
  };
  render() {
      let returnQuote  = this.state.quote;
    return (
      
      <div>
        <div className="card">
          <div className="card-block">
            <h3 className="card-title">Megulator</h3>
            <p className="card-text">{this.state.quote}</p>
            <h6 className="card-subtitle mb-2 text-muted">-Megan Phillips</h6>
            <div className="row">
              <div className="action col-sm">
                <button onClick={this.randomQuote} className="btn btn-primary" >New Quote</button>
              </div>
              <div className="col-sm">
                <div className="tweet">
                <a class="button"  title="Tweet this quote!" target="_blank" href={"https://twitter.com/intent/tweet?text=" + returnQuote + ' -Megan Phillips'}>
                <i className="fab fa-twitter-square"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    );
  }
}

export default App;
