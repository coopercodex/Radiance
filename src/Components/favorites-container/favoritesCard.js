import React from "react";
import Favorite from "../Favorites/Favorites";
const FavoriteContainer = ({ favorites, handleReset }) => {
    let userFavorites = favorites.map((fav) => {
        return (
            <Favorite
                props={fav}
                key={fav.id}
                handleReset={handleReset}
            />

        )
    })
    return <div className="favorites-hold">{userFavorites}</div>
}
export default FavoriteContainer;