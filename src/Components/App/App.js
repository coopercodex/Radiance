import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import './App.css';
import AffirmationCard from '../AffirmationCard/AffirmationCard';
import Favorites from '../Favorites/Favorites';


class App extends Component {
  constructor() {
    super();
    this.state = {
      affirmations: [],
      favorites: [],
    }
  }

  addFavorites = (id) => {
    const favs = this.state.affirmations.find(affirm => affirm.id === id);
    this.setState({ favorites: [...this.state.favorites, favs] })
    console.log(favs)
  }

  componentDidMount = () => {
    fetch('https://radiance-app.herokuapp.com/api/v1/affirmations')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ affirmations: data })
      })
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
        <main className='App'>
        <Route exact path='/' component={Navigation}/> 
        <Route exact path="/affirmationCard" render={() => <AffirmationCard affirmations={this.state.affirmations} add={this.addFavorites} />} /> 
        <Route exact path="/favorites" render={() => <Favorites affirmations={this.state.affirmations} add={this.addFavorites} favs={this.state.favorites} />}/>
        </main>
        </Switch>
      </BrowserRouter>
    )

  }
}
export default App;
