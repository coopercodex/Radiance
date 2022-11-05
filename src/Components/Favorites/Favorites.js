import React from 'react';
import image_1 from '../../images/image_1.png'
const Favorite = ({ props, handleReset }) => {
    return (
        <div className="favorites-card">
            <p>{props.description}</p>
            <img className='affirm-pic' alt={props.id} image={props.image} src={image_1} />
            <p className="home-page" onClick={() => handleReset()}>HOME</p>
        </div>
    )
}
export default Favorite;