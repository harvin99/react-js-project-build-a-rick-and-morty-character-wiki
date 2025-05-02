import React from "react";

const FilterBTN = (name, index, input) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          className
          Name="form-check-input"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label className="btn btn-outline-primary" htmlFor="radioDefault1">
          {input}
        </label>
      </div>

      <div className="form-check">
        <input
          className
          Name="form-check-input"
          type="radio"
          name="radioDefault"
          id="radioDefault2"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="radioDefault2">
          Default checked radio
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
