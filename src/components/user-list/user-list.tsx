import React, { Component, ReactNode, ChangeEvent } from 'react';
import { Loading } from '../loading';
import { Search } from '../search';
import { User } from '../user';
import { IUserListProps } from '../../interfaces';

export class UserList extends Component<IUserListProps>  {

  componentDidMount () : void {
    this.props.fetchUsers();
  }
  searchHandler = (event : ChangeEvent<HTMLInputElement>) : void => {
    this.props.searchInput(event.target.value);
  }
  render () : ReactNode {
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
