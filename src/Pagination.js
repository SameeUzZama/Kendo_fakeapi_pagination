import React from "react";

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {pageNumbers.map((number) => (
        <div key={number}>
          <button onClick={() => paginate(number)}>{number}</button>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
