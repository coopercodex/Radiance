import React from 'react'
import './Footer.css'
import radiance_logo from '../../images/radiance_logo.png'

const Footer = ({ handleReset, handleFavoriteClick, resetFavorites }) => {
    return (
        <div className='footer'>
            <p className="home-link" onClick={() => [handleReset(), resetFavorites()]}>HOME</p>
            <img className='radiance-logo-footer' src={radiance_logo} />

            <p onClick={() => [handleFavoriteClick(), handleReset()]} className='favorite-link'>FAVORITES</p>
        </div>
    )
}
export default Footer