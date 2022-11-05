
import React from "react";
import Footer from "../Footer/Footer";


const Favorites = ({ favs }) => {
    console.log(favs)

    return (
        <div className="Favorites">
            {/* {favs[0].description} */}
            <h1 style={{ color: 'gold' }}>{favs[0].description}
                {favs[1].description}
                {favs[2].description}</h1>
            <Footer />
        </div>
    )
}

export default Favorites;

import React from 'react';
import AffirmationCard from '../AffirmationCard/AffirmationCard';
import './Favorites.css';

const Favorites = ({ affirmation }) => {
    const favorite = affirmation.map((affirm) => {
        return (
            <div className="mini-card" key={affirm.id}>
                <p className="mini-description"> {affirm.description}</p>
                <img className="mini-pic" src={affirm.image} />
            </div>
        );
    });

    return <div className="mini-container">{favorite}</div>;
};

export default Favorites;

