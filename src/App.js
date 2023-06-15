import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react'
import Timer from './Components/Timer';

export default class App extends Component {

  

  render() {
    return (
      <Timer hour={1} minute={10} secund={0}/>
    )
  }
}

