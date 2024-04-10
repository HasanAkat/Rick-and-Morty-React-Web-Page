import React, { useState, useEffect } from 'react';
import Filters from '../componenets/Filters/Filters';
import Cards from '../componenets/Cards/Cards';
import Pagination from '../componenets/Pagination/Pagination';
import Search from '../componenets/Search/Search';

const Characters = () => {
  let [page, setPage] = useState(1);
  let [search, setSearch] = useState(""); 
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (    
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <Filters 
            page={page}
            status={status}
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
            setPage={setPage}
          />
        </div>
        <div className="col-lg-9 col-md-8">
          <Search setSearch={setSearch}/>
          <div className="row">
            <Cards page="/characters/" results={results} />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <Pagination info={info} page={page} setPage={setPage}/>
      </div>
    </div>
  );
}

export default Characters;
