import React from 'react'
import radiance_logo from '/Users/carissagross/turing/mod3/projects/Radiance/src/images/radiance_logo.png'
import './Navigation.css'

const Navigation = () => {
    return (
        <section className='Nav'>
            <img className='radiance-logo' src={radiance_logo} />
        </section>
    )
}
export default Navigation