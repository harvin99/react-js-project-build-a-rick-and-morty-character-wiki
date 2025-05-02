import React from "react";
import styles from "./Search.module.scss";
const Search = ({ setSearch, setPageNumber }) => {
  let searchBtn = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className
      Name="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5"
    >
      <input
        onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for Characters "
        type="text"
        className
        Name={styles.input}
      />
      <button
        onClick={searchBtn}
        className
        Name={`${styles.button} btn btn-primary fs-5 `}
      >
        Search
      </button>
    </form>
  );
};
export default Search;
