import React from 'react';
import PropTypes from 'prop-types';
export const User = ({ users }) =>
  users.map(
    user => (
      <div key={user.id}>
        <h2>{user.login}</h2>
        <img src={user.avatarUrl} alt='Some Faces are missing' height={100}></img>
        <p>{user.organizationsUrl}</p>
        <p>{user.received_eventsUrl}</p>
        <p>{user.reposUrl}</p>
        <p>{user.starredUrl}</p>
        <p>{user.subscriptionsUrl}</p>
        <hr />
      </div>
    )
  )

  User.propTypes = {
    users: PropTypes.array
  };
  