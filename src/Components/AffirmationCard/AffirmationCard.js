
import React from 'react'
import Footer from '../Footer/Footer';
import './AffirmationCard.css'
import favoriteLogo from '../../images/image_10.png'
import favoriteLogo2 from '../../images/image_11.png'

const AffirmationCard = ({ affirmations, add }) => {
    const getAffirmations = affirmations.map((affirm) => {
        return affirm;
    })
    let currentAffirm = getAffirmations[Math.floor(Math.random() * getAffirmations.length)];

    return (currentAffirm) ? (
        <div className='card-container'>
            <div className='affirmation-card'>
                <p className='card-description'>
                    {currentAffirm.description}
                </p>
                <img className='affirm-pic' src={currentAffirm.image} alt="Geometric line art of suns, moons, and stars" />
                <div className='favorite-container'>
                    <button onClick={() => add(currentAffirm.id)}> <img src={favoriteLogo} onMouseOut={e => (e.currentTarget.src = favoriteLogo)} onMouseOver={e => (e.currentTarget.src = favoriteLogo2)} className='favorite-button' alt="Line art of a star" /></button>
                </div>
            </div>
            <Footer />
        </div>
    ) : null

}
export default AffirmationCard;
