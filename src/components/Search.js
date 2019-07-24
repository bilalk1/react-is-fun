import React, { Component } from 'react';

class Search extends Component {
    componentWillReceiveProps(nextProps, nextState) {
    }
    render() {
        const { search } = this.props;
        return (
            <div>
                <label>Search:</label>
                <input onChange={search}></input>
            </div>
        )
    }
}
export default Search;