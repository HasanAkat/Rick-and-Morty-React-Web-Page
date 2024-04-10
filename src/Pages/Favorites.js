import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorites } from '../redux/favoritesSlice';
import { Link } from 'react-router-dom';
import { IoTrashBin } from "react-icons/io5";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favoritesItems);
  const dispatch = useDispatch();

  const removeFromFavoritesHandler = (character) => {
    dispatch(removeFavorites(character)); 
  }

  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-4">Favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-center">There are no favorite characters yet.</p>
      ) : (
        <div className="row">
          {favorites.map((character) => (
            <div className="col-md-3 mb-3 text-center character-card" key={character.id}>
              
                <img src={character.image} className="card-img-top circle-img" alt={character.name} />
                <div className="card-body">
                  <h5 className="card-title fs-4 fw-bold">{character.name}</h5>
                  <button className="btn btn-light" onClick={() => removeFromFavoritesHandler(character)}><IoTrashBin /></button>
                </div>
          
            </div>
          ))}
        </div>
      )}
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-dark">Back to Home</Link>
      </div>
    </div>
  );
};

export default Favorites;
