import React, { Component } from 'react'
import Footer from '../Footer/Footer';
import './AffirmationCard.css'
import image_1 from '../../images/image_1.png'
import favoriteLogo from '../../images/image_10.png'
import { getData } from '../../apiCalls';

class AffirmationCard extends Component {
    constructor() {
        super();
        this.state = {
            affirmations: []
        }
    }
    componentDidMount = () => {
        getData().then((json) =>
            this.setState({ affirmations: json }),
        );
    };
    submitAffirmation = event => {
        event.preventDefault();
        const affirmation = {
            id: Date.now(),
            ...this.state.favorites
        }
        this.props.addToFavorites(affirmation);
        this.clearAffirmations()
    }
    clearAffirmations = () => {
        this.setState({
            isClicked: false,
            favoriteIsClicked: false
        })
    }
    generateRandom = () => {
        return Math.floor(Math.random() * this.state.affirmations.length);
    }

    render() {
        const affirm = this.state.affirmations
        console.log((affirm))
        return (
            <div className='card-container'>
                <div className='affirmation-card'>
                    <p className='card-description'> {affirm.description}</p>
                    <img className='affirm-pic' alt={affirm.description} src={image_1} />
                    <div className='favorite-container'>
                        <img className='favorite' alt={affirm.id} src={favoriteLogo} />
                    </div>
                    <button onClick={event => this.submitAffirmation(event)}>Add To Favorites?</button>
                </div>
                <Footer handleReset={this.props.handleReset} />
            </div>
        )

    }
}

export default AffirmationCard
