
import React, { Component, useState } from 'react'
import Footer from '../Footer/Footer';
import './AffirmationCard.css'
import favoriteLogo from '../../images/image_10.png'

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
                <img className='affirm-pic' src={currentAffirm.image} />
                <div className='favorite-container'>
                    <button onClick={() => add(currentAffirm.id)}> <img className='favorite-button' src={favoriteLogo} /></button>
                </div>
            </div>
            <Footer />
        </div>
    ) : null

}
export default AffirmationCard;
