import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import './App.css';
import AffirmationCard from '../AffirmationCard/AffirmationCard';
import Favorites from '../Favorites/Favorites';
import { getData } from '../../apicalls';


class App extends Component {
  constructor() {
    super();
    this.state = {
      affirmations: [],
      favorites: [],
      error: ''
    }
  }

  addFavorites = (id) => {
    const favs = this.state.affirmations.find(affirm => affirm.id === id);
    this.setState({ favorites: [...this.state.favorites, favs] })
  }

  componentDidMount = async () => {
    try {
      const result = await getData()
      const data = await result.json()
      this.setState({ affirmations: data })
    } catch (error) {
      this.setState({ error: `There was an error retrieving the data.` })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <main className='App'>
          <Switch>
            <Route exact path='/' component={Navigation} />
            {this.state.error && <h2 className="api-error">{this.state.error}</h2>}
            <Route exact path="/affirmationCard" render={() => <AffirmationCard affirmations={this.state.affirmations} add={this.addFavorites} />} />
            <Route exact path="/favorites" render={() => <Favorites affirmations={this.state.affirmations} add={this.addFavorites} favs={this.state.favorites} />} />
            <Route path="*" render={() => <h2>We're sorry, it seems there's no affirmations at this time.</h2>} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}
export default App;
