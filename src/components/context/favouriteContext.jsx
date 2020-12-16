import React, {useEffect, useState, createContext} from 'react';
import axios from 'axios'; 

export const FavouriteContext = createContext();

export const FavouriteProvider = (props) => {
   
    const [favourites, setFavourites] = useState([]);


    return (
        <FavouriteContext.Provider value={[favourites, setFavourites]}>
            {props.children}
        </FavouriteContext.Provider>
    )
}

