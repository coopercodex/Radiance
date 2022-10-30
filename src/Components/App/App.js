import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer';
import './App.css';

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      
    }
  }

  render() {
    return (
      <main className='App'>
        <nav>
          <Navigation />
        </nav>
        <h1 className='welcome'>
          Hello, you lovely human
        </h1>
        <button className='affirmation-button'>take a breath</button>
        <Footer /> 
      </main>
    )
  }
}
export default App;
