import React from 'react'
import AffirmationCard from '../AffirmationCard/AffirmationCard'
import './Favorites.css'

const Favorites = ({affirmation}) => {

const favorite = affirmation.map((affirm => {

    return (
  
      <div className="mini-card" key={affirm.id}>
        <p className="mini-description"> {affirm.description}</p>
        <img className="mini-pic" src={affirm.image} />
      </div>
    
    );
  })
)

  return (
    <div className="mini-container">
        {favorite}
    </div>
  )
}

export default Favorites

