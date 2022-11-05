import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer';
import './App.css';
import AffirmationCard from '../AffirmationCard/AffirmationCard';
import FavoriteContainer from '../favorites-container/favoritesCard';
import { getData } from '../../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      affirmations: [],
      isClicked: false,
      favoriteIsClicked: false,
      favorites: []
    }
  }
  componentDidMount = () => {
    getData().then((json) =>
      this.setState({ affirmations: json }),
    );
  };
  handleClick = () => {
    this.setState({ isClicked: true })
  }
  handleReset = () => {
    this.setState({
      isClicked: false,
    })
  }
  resetFavorites = () => {
    this.setState({
      favoriteIsClicked: false
    })
  }
  handleFavoriteClick = () => {
    this.setState({ favoriteIsClicked: true })
  }
  addToFavorites = (affirmation) => {
    this.setState({ favorites: [...this.state.favorites, affirmation] })
  }
  render() {
    return (
      <main className='App'>
        <Route
          exact
          path="/"
          render={() => {
            return (
              !this.state.isClicked && !this.state.favoriteIsClicked ? (
                <Navigation handleClick={this.handleClick} />
              ) : (
                this.state.isClicked ? (
                  <h1>
                    <AffirmationCard addToFavorites={this.addToFavorites} handleReset={this.handleReset} />
                  </h1>
                ) : this.state.favoriteIsClicked ? (<h1><FavoriteContainer handleReset={this.handleReset} favorites={this.state.favorites} />ITS FAVORITED</h1>) :
                  (<Navigation handleClick={this.handleClick} />)
              )


            )
          }
          }
        />
        <Footer resetFavorites={this.resetFavorites} handleFavoriteClick={this.handleFavoriteClick} handleReset={this.handleReset} />
      </main>
    )
  }

}
export default App;
