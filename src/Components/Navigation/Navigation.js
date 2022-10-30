import React from 'react'
import radiance_logo from '../../images/radiance_logo.png'
import './Navigation.css'

const Navigation = () => {
    return (
        <section className='Nav'>
            <img className='radiance-logo' src={radiance_logo} />
        </section>
    )
}
export default Navigation