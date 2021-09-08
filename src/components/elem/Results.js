import React from 'react';

export const Results = ({items, title}) => {
  console.log(items, "items")
  return (
    <div className="results">
      <h2 className="title is-size-3">{title ? title : ''}</h2>
      <ul>
        {items}
      </ul>
    </div>
  );
};

export default Results;
