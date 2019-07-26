import React, { Component } from 'react';

class Search extends Component {
    componentWillReceiveProps(nextProps, nextState) {
    }
    render() {
        const { searcHandler ,sortHandler} = this.props;
        return (
            <div>
                <label>Search:</label>
                <input onChange={searcHandler}></input>
                <label onClick={sortHandler}><u><b>sort</b></u></label>
            </div>
        )
    }
}
export default Search;