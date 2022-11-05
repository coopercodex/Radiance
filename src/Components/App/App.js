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
        this.setState({ affirmations: data })
      })
    this.dataClean()
  }
  dataClean = (data) => {
    const lol = {}
    this.state.affirmations.map((affirm) => {
      this.setState({ affirmations: [...this.state.affirmations, { isfavortie: false }]})
    })
  }

  render() {
    return (
      <BrowserRouter>
        <main className='App'>
        <Switch>
          <Route exact path='/' component={Navigation}/> 
          <Route exact path="/affirmationCard" render={() => <AffirmationCard affirmations={this.state.affirmations} add={this.addFavorites} />} /> 
          <Route exact path="/favorites" render={() => <Favorites affirmations={this.state.affirmations} add={this.addFavorites} favs={this.state.favorites} />}/>
        </Switch>
        </main>
      </BrowserRouter>
    )
  }
}
export default App;
