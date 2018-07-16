import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RenderingState from './RenderingState';
import Counter from "./Counter";
import Poker from "./Poker";
import Header from "./Header";
import CallbackButton from "./CallbackButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Header h1Text="header"/>
        <Header h1Text="main"/>
        <Header h1Text="footer"/>
        <CallbackButton buttonCallback= {() =>{console.log("one")}}/>
        <CallbackButton buttonCallback={() =>{console.log("two")}}/>
        <RenderingState />
        <Counter />
        <Poker />
      </div>
    );
  }
}

export default App;
