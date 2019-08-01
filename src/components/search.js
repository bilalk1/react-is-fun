import React from 'react';
import PropTypes from 'prop-types';


export const Search = ({ searcHandler, sortHandler }) =>
  (
    <div>
      <label>Search:</label>
      <input onChange={searcHandler} />
      <label onClick={sortHandler}>sort</label>
    </div>
  )
  Search.propTypes = {
    searcHandler: PropTypes.func,
    sortHandler:PropTypes.func,
  };
  