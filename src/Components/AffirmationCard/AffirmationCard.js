import React, { Component } from 'react'
import Footer from './Components/Footer/Footer'
import './AffirmationCard.css'

class AffirmationCard extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='affirmation-card'>
                <p>Affirmation</p>
                <img>IMAGE HERE</img>
                <img>Favorites ICON</img>
                <Footer />
            </div>
        )
    }
}
export default AffirmationCard
