import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";
import './Filters.css';

const Filter = ({
  page,
  setPage,
  setStatus,
  setGender,
  setSpecies,
}) => {
  let clear = () => {
    setStatus("");
    setGender("");
    setSpecies("");
    setPage(1);
    window.location.reload(false);
  };
  return (
    <div>
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="clear text-decoration-underline text-center mb-3"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status
          setPage={setPage}
          setStatus={setStatus}
        />
        <Species
          setPage={setPage}
          setSpecies={setSpecies}
        />
        <Gender
          setPage={setPage}
          setGender={setGender}
        />
      </div>
    </div>
  );
};

export default Filter;