import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    error: null,
    isLoaded: false,
    items: [],
    data: [{
      author: 'Loading...',
      quote: 'Loading...'
    }]
  };
    this.randomQuote = this.randomQuote.bind(this);
  }
  
  async randomQuote() {

  const result =   await fetch("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous", {
      headers: { 'X-Mashape-Key': '95xnlXQbHHmshx9yQ6nMBY5Z0XI8p1tmlDIjsn1Mk9E8yRwZCM'},
  })
  

  const json = await result.json()
  console.log(json)

  this.setState({data: json})
  console.log(this.state.data)
  console.log(this.state.data[0])

    const colors = [
      '#39CCCC',
      '#85144b',
      '#FF4136',
      '#7FDBFF',
      '#3D9970',
      '#FFDC00',
      '#01FF70',
      '#2ECC40',
      '#FF851B'
    ];
    
    let randNum2 = Math.floor(Math.random() * (colors.length)) + 0;
    document.body.style.backgroundColor = colors[randNum2];
  
  };

  async componentWillMount() {
    const result = await fetch("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous", {
      headers: { 'X-Mashape-Key': '95xnlXQbHHmshx9yQ6nMBY5Z0XI8p1tmlDIjsn1Mk9E8yRwZCM' },
    })


    const json = await result.json()
    this.setState({ data: json })
}

  render() {

    return (
         
      <div>
        <div className="card">
          <div className="card-block">
            <h3 className="card-title">Quote Generator</h3>
            <br />      
            <p className="card-text">{this.state.data[0].quote || 'Loading'}</p>
            <div></div>
            <h6 className="card-subtitle mb-2 text-muted">-{this.state.data[0].author || 'Loading'}</h6>  
            <div className="row">
              <div className="action col-sm">
                <button onClick={this.randomQuote} className="btn btn-primary" >New Quote</button>
              </div>
              <div className="col-sm">
                <div className="tweet">
                <a className="button"  title="Tweet this quote!" target="_blank" href={"https://twitter.com/intent/tweet?hashtags=quotes,famous&text=" + this.quote+ ' -' + this.author}>
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
