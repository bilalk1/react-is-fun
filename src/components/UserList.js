import React, { Component } from 'react';
import Search from './Search';
import User from './User';


class UserList extends Component {
   
    state = {
        search: '',
        loading: true,
        users: []
    };
    componentWillReceiveProps(props, state) {

    }
    componentWillMount() {

    }
    componentDidMount() {
        this.fetchData();
    }
    shouldComponentUpdate(nextProps, nextState) {
        const { users, search, loading } = this.state;
        return (
            (JSON.stringify(users)) !== (JSON.stringify(nextState.users)) || search !== nextState.search ||
            loading !== nextState.loading
        )
    }

    componentDidUpdate(prevProps, prevState) {
        const { search } = this.state;
        (search !== prevState.search) && this.searchingFromFetchData(search);

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
    render() {

        const { users } = this.state;
        return (
            <div>
                <h1>Users</h1>
                <Search search={this.searchandler} />
                {this.state.loading
                    ? 'Loading...'
                    : <User users={users} />
                }
            </div>
        )
    }
}
export default UserList;