import React, { Component } from 'react';

class Search extends Component {
    componentWillReceiveProps(nextProps, nextState) {
        console.log(nextProps, nextState)
    }
    render() {
        return (
            <div>
                Search: <input onChange={this.props.search}></input>
            </div>
        )
    }
}
export default Search;