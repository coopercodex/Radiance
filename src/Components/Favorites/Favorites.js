import React from "react";
import Footer from "../Footer/Footer";


const Favorites = ({ favs }) => {
  console.log(favs)

  return (
    <div className="Favorites">
      {/* {favs[0].description} */}
      <h1 style={{color: 'gold'}}>{favs[0].description}
      {favs[1].description}
      {favs[2].description}</h1>
      <Footer />
    </div>
  )
}

export default Favorites;