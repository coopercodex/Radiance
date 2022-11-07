import React from 'react'
import './Footer.css'
import radiance_logo from '../../images/radiance_logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <Link to="/" className="home-link">HOME</Link>
            <img className='radiance-logo-footer' src={radiance_logo} alt='Line art of sunset in the mountains' />
            <Link to='/favorites' className='favorite-link'>FAVORITES </Link>
        </div>
    )
}
export default Footer

