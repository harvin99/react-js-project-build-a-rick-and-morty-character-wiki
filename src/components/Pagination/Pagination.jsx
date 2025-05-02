import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, info, setPageNumber }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup tránh memory leak
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ReactPaginate
      className
      Name="pagination justify-content-center my-4 gap-4"
      nextLabel="Next"
      previousLabel="Prev"
      previousclassName
      Name="btn btn-primary fs-5 prev"
      nextclassName
      Name="btn btn-primary fs-5 next"
      activeclassName
      Name="active"
      pageclassName
      Name="page-item"
      pageLinkclassName
      Name="page-link"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      marginPagesDisplayed={width < 576 ? 1 : 2}
      pageRangeDisplayed={width < 576 ? 1 : 2}
      pageCount={info?.pages}
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
    />
  );
};
export default Pagination;
