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
    // this.state = {
    //   affirmations : affirmationsData
    // }
  }

  render() {
    // console.log(this.state.affirmations.affirmations)
    return (
      <main className='App'>
          <Route path='/' component={Navigation} />
        {/* <AffirmationCard /> */}
      </main>
    )
  }
}
export default App;
