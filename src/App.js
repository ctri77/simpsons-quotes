import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GenerateQuote from './GenerateQuote';
import DisplayQuote from './DisplayQuote';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
    }
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {   
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(response => response.json())
    .then(data => {
      this.setState({quote: data[0]})
    })
    ;
    
  }
    
  render() {
    const clsLogo = (this.state.working) ? "App-logo" : "pause";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={clsLogo} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <GenerateQuote selectQuote={this.getQuote} />
        <DisplayQuote quote={this.state.quote} />
      </div>
    );
  }
}

export default App;
