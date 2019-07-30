import React, { Component } from 'react';

export class Search extends Component {
  render() {
    const { searcHandler, sortHandler } = this.props;
    return (
      <div>
        <label>Search:</label>
        <input onChange={searcHandler} />
        <label onClick={sortHandler}>sort</label>
      </div>
    )
  }
};
