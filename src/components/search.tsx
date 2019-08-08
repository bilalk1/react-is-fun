import React from 'react';
import { ISearchProps } from '../interfaces';


export const Search = ({ searcHandler, sortHandler } : ISearchProps) : JSX.Element =>
  (
    <div>
      <label>Search:</label>
      <input onChange={searcHandler} />
      <label onClick={sortHandler}>sort</label>
    </div>
  );
