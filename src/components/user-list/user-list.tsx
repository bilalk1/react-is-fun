import React, { Component, ReactNode, ChangeEvent } from 'react';
import { Loading } from '../loading';
import { Search } from '../search';
import { User } from '../user';
import { IUserListProps, IUserListState } from '../../type';

export class UserList extends Component<IUserListProps, IUserListState>  {

  componentDidMount () : void {
    this.props.fetchUsers();
  }
  searchHandler = (event : ChangeEvent<HTMLInputElement>) : void => {
    this.props.searchInput(event.target.value);
  }
  render () : JSX.Element  {
    const { users, fetching, sortUser } = this.props;
    return (
      <div>
        <h1>Users :</h1>
        <Search searcHandler={this.searchHandler} sortHandler={sortUser} />
        {fetching
          ? <Loading />
          : <User users={users} />
        }
      </div>
    );
  }
}
