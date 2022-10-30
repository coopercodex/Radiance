import React from 'react'
import radiance_logo from '../../images/radiance_logo.png'
import './Navigation.css'

const Navigation = () => {
    return (
        <section className='Nav'>
            <div className='logo-container'>
                <img className='radiance-logo' src={radiance_logo} />
            </div>
            <div className='welcome-container'>
                <h1 className='welcome'>
                    hello, you lovely human
                </h1>
                <button className='affirmation-button'>take a breath</button>
            </div>
        </section>
    )
}
export default Navigation