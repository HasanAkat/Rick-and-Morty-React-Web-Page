import React, { useEffect, useState } from "react";
import Cards from "../componenets/Cards/Cards";
import InputGroup from "../componenets/Filters/Category/InputGroup";

const Episodes = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
          <h4 className="text-center mb-4">Pick Episode</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>
        <div className="col-lg-9 col-md-8 col-sm-6">
          <div className="row">
            <div className="col-lg-12 mb-4">
              <h1 className="text-center mb-3">
                Episode Name :{" "}
                <span style={{ color:'#96FF33' }}>{name === "" ? "Unknown" : name}</span>
              </h1>
              <h5 className="text-center">
                Air Date: {air_date === "" ? "Unknown" : air_date}
              </h5>
            </div>
            <Cards page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
