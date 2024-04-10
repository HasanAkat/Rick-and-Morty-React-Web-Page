import React, { useEffect, useState } from "react";
import Cards from "../componenets/Cards/Cards";
import InputGroup from "../componenets/Filters/Category/InputGroup";

const Locations = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { dimension, type, name } = info;
  let [number, setNumber] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${number}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-12 mb-4" style={{ marginLeft: '-80px' }}>
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup name="Location" changeID={setNumber} total={126} />
        </div>
        <div className="col-lg-8 col-12">
          <div className="row">
            <div className="row mb-3">
              <h1 className="text-center mb-3">
                Location :
                <span style={{ color:'#96FF33' }}>
                  {" "}
                  {name === "" ? "Unknown" : name}
                </span>
              </h1>
              <h5 className="text-center">
                Dimension: {dimension === "" ? "Unknown" : dimension}
              </h5>
              <h6 className="text-center">Type: {type === "" ? "Unknown" : type}</h6>
            </div>
            <Cards page="/locations/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;