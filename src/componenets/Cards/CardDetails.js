import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../redux/favoritesSlice';

const CardDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  const addToFavoritesHandler = () => {
    dispatch(addToFavorites(fetchedData));
  }

  return (
    <div className="container d-flex justify-content-center mb-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <img className="img-fluid mb-3" src={image} alt={name} />
          <div className="badge fs-5" style={{ width: "100%", backgroundColor: status === "Dead" ? '#dc3545' : (status === "Alive" ? '#198754' : '#6c757d') }}>
            {status}
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="mb-4">{name}</h1>
          <div className="content">
            <div className="mb-3">
              <span className="fw-bold">Gender:</span> {gender}
            </div>
            <div className="mb-3">
              <span className="fw-bold">Location:</span> {location?.name}
            </div>
            <div className="mb-3">
              <span className="fw-bold">Origin:</span> {origin?.name}
            </div>
            <div className="mb-3">
              <span className="fw-bold">Species:</span> {species}
            </div>
            <button className="heart-button" onClick={addToFavoritesHandler}> 
              <FaHeart /> Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;