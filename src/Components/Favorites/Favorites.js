
import React from "react";
import Footer from "../Footer/Footer";
import './Favorites.css'

const Favorites = ({ favs }) => {
  const favorite = favs.map((affirm) => {
    return (
      <div>
        <div className="mini-container">
          <div className="mini-card" key={affirm.id}>
            <p className="mini-description"> {affirm.description}</p>
            <img className="mini-pic" src={affirm.image} />
          </div>
        </div>
        <Footer />
      </div>
    );
  });

  return <div className="mini-fav-container">{favorite}</div>;
};


export default Favorites;






