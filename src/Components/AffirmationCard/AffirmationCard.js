import React, { Component } from 'react'
import Footer from '../Footer/Footer';
import './AffirmationCard.css'
import affirmationsData from '../../AffirmationsData'
import image_1 from '../../images/image_1.png'
import favoriteLogo from '../../images/image_10.png'

class AffirmationCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            affirmations: affirmationsData.affirmations
        }
    }

    generateRandom() {
        return Math.floor(Math.random() * this.state.affirmations.length);
    }

    render() {
        // console.log(this.generateRandom())
        const affirm = this.state.affirmations[this.generateRandom()]
        return (
            <div className='card-container'>
                <div className='affirmation-card'>
                    {/* <p className='card-title'>Affirmation</p> */}
                    <p className='card-description'> {affirm.description}</p>
                    <img className='affirm-pic' src={image_1} />
                    <div className='favorite-container'>
                        <img className='favorite' src={favoriteLogo} />
                    </div>
                    {/* <Footer /> */}
                </div>
                <Footer handleReset={this.props.handleReset} />
            </div>
        )
    }
}
export default AffirmationCard
