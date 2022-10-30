import React, { Component } from 'react'
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
        <nav>
          <Navigation />
        </nav>
        <h1 className='welcome'>
          Hello, you lovely human
        </h1>
        <button className='affirmation-button'>take a breath</button>
        {/* <AffirmationCard />  */}
        {/* <Footer />  */}
      </main>
    )
  }
}
export default App;
