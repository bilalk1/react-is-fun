import React, { Component } from 'react';
import Search from './Search';
import User from './User';
import { connect } from 'react-redux';
import { fetchUsers, searchInput, filterUser, sortUser } from '../actions/userAction';

class UserList extends Component {

    componentDidMount(){
        this.props.dispatch(fetchUsers());
    }
    searcHandler = (event) => {
        let { nativeEvent: { target: { value } } } = event;
        this.props.dispatch(searchInput(value));
        this.props.dispatch(filterUser())

    }
    sortHandler = () => {
        this.props.dispatch(sortUser());
    }
    render() {
        let { users, fetching, tempUsers } = this.props;
        return (
            <div>
                <h1>Users</h1>
                <Search searcHandler={this.searcHandler} sortHandler={this.sortHandler} />
                {fetching
                    ? 'Loading...'
                    : <User users={(tempUsers.length < 1) ? users : tempUsers} />
                }
            </div>
        )
    }
}
const mapStateToProps = function (store) {
    return {
        users: store.user.users,
        fetching: store.user.fetching.dispatch,
        search: store.user.search,
        tempUsers: store.user.tempUsers

    }
}

export default connect(mapStateToProps)(UserList)