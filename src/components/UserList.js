import React, { Component } from 'react';
import Search from './Search';
import User from './User';

class UserList extends Component {
    state = {
        search: '',
        loading: true,
        users: []
    };
    render() {
        return (
            <div>
                <h1>Users</h1>
                <Search search={this.searchandler} />
                {this.state.loading
                    ? 'Loading...'
                    : <User users={this.state.users} />
                }
            </div>
        )
    }
    componentWillReceiveProps(props, state) {

    }
    componentWillMount() {

    }
    shouldComponentUpdate(nextProps, nextState) {
        return (
            this.state.users !== nextState.users || this.state.search !== nextState.search ||
            this.state.loading !== nextState.loading
        )
    }
    componentDidMount() {
        this.fetchData();
    }
    componentDidUpdate(prevProps, prevState) {
        (this.state.search !== prevState.search) ?
            this.searchingFromFetchData(this.state.search) : console.log(this.state.search);

    }
    componentWillUnmount() {
    }

    fetchData(search) {
        let url = `https://api.github.com/users`;
        if (search) url = `${url}/${search}`;
        fetch(url)
            .then(users => {
                return (users.status === 200) ? users.json() : []
            })
            .then(users => {
                users = (Array.isArray(users)) ? users : [users];
                this.setState({ users, loading: false })
            })
            .catch(err => console.log(err));
    }
    searchingFromFetchData(search) {
        if (!search) return this.fetchData()

        let users = this.state.users.filter(u => {
            if (u.login.indexOf(search) > -1) {
                return u;
            }
        })

        this.setState({ users });

    }

    searchandler = (event) => {
        let { nativeEvent: { target: { value } } } = event;
        this.setState({ search: value })
    }

}
export default UserList;