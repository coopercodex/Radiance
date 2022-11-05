import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import './AffirmationCard.css';
import affirmationsData from '../../AffirmationsData';
// import image_1 from '../../images/image_1.png'
import favoriteLogo from '../../images/image_10.png';
import { getData } from '../../apicalls';
import Favorites from '../Favorites/Favorites';

class AffirmationCard extends Component {
  constructor() {
    super();
    this.state = {
      affirmations: '',
      error: '',
    };
  }

  //      componentDidMount= () => {
  //     fetch('https://radiance-app.herokuapp.com/api/v1/affirmations')
  //     .then(response => response.json())
  //     .then(data => this.setState({ affirmations: data }))
  //     .catch(err => console.log(err))
  //   }

  componentDidMount = async () => {
    try {
      const result = await getData();
      const data = await result.json();
      this.setState({ affirmations: data });
    } catch (error) {
      this.setState({
        error: 'There was an error fetching your ideas',
      });
    }
  };

  render() {
    // console.log(this.state.affirmations)
    if (!this.state.affirmations) {
      return <p>loading</p>;
    }
    const affirm =
      this.state.affirmations[
        Math.floor(Math.random() * this.state.affirmations.length)
      ];
    return (
      <div className="card-container">
        <div className="affirmation-card">
          <p className="card-title">Affirmation</p>
          <p className="card-description"> {affirm.description}</p>
          <img className="affirm-pic" src={affirm.image} />
          <div className="favorite-container">
            <img className="favorite" src={favoriteLogo} />
          </div>
        </div>
        {/* ///////////////////////////////needs to be (affirmation === [array] )*/}  
        {/* <div>
         <Favorites affirmation={this.state.affirmations} />{' '}
       </div> */}
            {/* /////////////////////////////////// */}
        <Footer handleReset={this.props.handleReset} />
      </div>
    );
  }
}
export default AffirmationCard;
