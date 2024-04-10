import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import './Cards.css';
import { addToFavorites } from '../../redux/favoritesSlice';

const Cards = ({ results, page }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favoritesItems = useSelector(state => state.favorites.favoritesItems);

  const addToFavoriteHandler = (character) => {
    const isAlreadyFavorite = favoritesItems.some((item) => item.id === character.id);

    if (isAlreadyFavorite) {
      alert("This character is already in favorites!");
    } else {
      dispatch(addToFavorites(character));
      navigate('/favorites');
    }
  }

  let display;
  if (results) {
    display = results.map((character) => {
      let { id, name, image } = character;
      return (
        <Link
          to={`${page}${id}`}
          key={id}
          className="col-3"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          <div className="text-center character-card">
            <img src={image} className="circle-img" alt={name} />
            <div className="fs-4 fw-bold">{name}</div>
            <button 
              className="btn btn-danger" 
              onClick={(e) => { 
                e.preventDefault();
                addToFavoriteHandler(character);
              }} 
            > 
              <FaHeart />
            </button>
          </div>
        </Link>
      );
    });
  } else {
    display = "Karakter Bulunamadı";
  }

  return <>{display}</>;
};

export default Cards;
