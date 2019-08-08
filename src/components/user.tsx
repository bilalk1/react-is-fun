import React from 'react';
import { IUser, IUserProps } from '../interfaces';

export const User = ({ users } : IUserProps) : JSX.Element => (
  <div>
    {users.map((user : IUser) : JSX.Element => (
         <div key={user.id}>
         <h2>{user.login}</h2>
        <img src={user.avatarUrl} alt='Some Faces are missing' height={100}></img>
         <p>{user.organizationsUrl}</p>
        <p>{user.receivedEventsUrl}</p>
        <p>{user.reposUrl}</p>
        <p>{user.starredUrl}</p>
        <p>{user.subscriptionsUrl}</p>
         <hr />
       </div>
      ))
    }
  </div>
);
