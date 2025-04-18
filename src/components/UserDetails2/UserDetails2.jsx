import React, { use } from "react";

const UserDetails2 = ({ userPromise }) => {
  const { name, username } = use(userPromise);
  return (
    <div>
      <p>Name: {name}</p>
      <p>
        <small>userName: {username}</small>
      </p>
    </div>
  );
};

export default UserDetails2;
