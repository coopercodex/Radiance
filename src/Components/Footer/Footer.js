import React from 'react'
import './Footer.css'
import radiance_logo from '../../images/radiance_logo.png'
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom'
import App from '../App/App'

const Footer = ({ handleReset }) => {
    return (
        <div className='footer'>
            <Link to="/" className="home-link">HOME</Link>
            {/* <Route exact path='/' component={App}/> */}
            {/* <Link to='/' onClick={() => this.getData()} className="home-button">Home</Link> */}
            <img className='radiance-logo-footer' src={radiance_logo} />
            <Link to='/favorites' className='favorite-link'>FAVORITES </Link>
        </div>
    )
}
export default Footer

