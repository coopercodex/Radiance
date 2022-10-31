import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer';
import './App.css';
import affirmationsData from '../../AffirmationsData.js'
import AffirmationCard from '../AffirmationCard/AffirmationCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      affirmations: affirmationsData,
      isClicked: false
    }
  }
  handleClick = () => {
    this.setState({ isClicked: true })
    console.log('here!')
  }
  handleReset = () => {
    this.setState({ isClicked: false })
  }
  render() {
    return (
      <main className='App'>
        <Route
          exact
          path="/"
          render={() => {
            return (
              this.state.isClicked ? (
                <AffirmationCard handleReset={this.handleReset} />
              ) : (<Navigation handleClick={this.handleClick} />))
          }
          }
        />
      </main>
    )
  }

}
export default App;
