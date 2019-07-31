import React from 'react';

export const Search = props => {
  const { searcHandler, sortHandler } = props;
  return (
    <div>
      <label>Search:</label>
      <input onChange={searcHandler} />
      <label onClick={sortHandler}>sort</label>
    </div>
  )
};
