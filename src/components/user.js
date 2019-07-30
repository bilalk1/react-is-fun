import React from 'react';

export const User = (({ users }) =>
  users.map(
    (user) => (
      <div key={user.id}>
        <h2>{user.login}</h2>
        <img src={user.avatar_url} alt='' height={100}></img>
        <p>{user.organizations_url}</p>
        <p>{user.received_events_url}</p>
        <p>{user.repos_url}</p>
        <p>{user.starred_url}</p>
        <p>{user.subscriptions_url}</p>
        <hr />
      </div>
    )
  )
);
