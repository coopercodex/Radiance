import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import './App.css';
import affirmationsData from '../../AffirmationsData.js';
import AffirmationCard from '../AffirmationCard/AffirmationCard';
import { getData } from '../../apicalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      affirmations: null,
      isClicked: false,
    };
  }

  // componentDidMount= () => {
  //   fetch('https://radiance-app.herokuapp.com/api/v1/affirmations')
  //   .then(response => response.json())
  //   .then(data => this.setState({ affirmations: data }))
  //   .catch(err => console.log(err))
  // }

  //   componentDidMount = async() => {
  //     // fetch('https://radiance-app.herokuapp.com/api/v1/affirmations')
  //     try {
  //         const result = await getData()
  //         const data = await result.json()
  //         this.setState({affirmations: data})

  //     } catch (error) {
  //         this.setState({
  //             error: 'There was an error fetching your ideas'
  //         })
  //     }
  // }

  handleClick = () => {
    this.setState({ isClicked: true });
  };
  handleReset = () => {
    this.setState({ isClicked: false });
  };

  mapData = () => {
    const mapped = this.state.affirmations.map((affirm) => {
      return [affirm][0].id;
    });
    return mapped;
  };

  render() {
    // console.log('this is mapped',this.mapData())
    // if (!this.state.affirmations) {
    //   return (
    //     <p>loading</p>
    //     );
    //   }
    // console.log(this.state.affirmations[0].description)
    // console.log(this.state.affirmations[0].map(affirm => affirm))
    return (
      <main className="App">
        <Route
          exact
          path="/"
          render={() => {
            return this.state.isClicked ? (
              <AffirmationCard
                handleReset={this.handleReset}
                affirmations={this.state.affirmations}
              />
            ) : (
              <Navigation handleClick={this.handleClick} />
            );
          }}
        />
        {/* <AffirmationCard />  */}
      </main>
    );
  }
}
export default App;
