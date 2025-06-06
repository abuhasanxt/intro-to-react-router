import React, { Suspense, useState } from "react";
import { Link, Navigate } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";

const User = ({ user }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [visitHome,setVisitHome]=useState(false)
  const { name, phone, email, id } = user;
  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());

  const userStyle = {
    border: "2px solid yellow",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
  };

  if (visitHome) {
    return <Navigate to='/'></Navigate>
  }
  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>
        <small> phone: {phone}</small>
      </p>

      <Link to={`/users/${id}`}>Show Details</Link>
      <button
        onClick={() => setShowInfo(!showInfo)}
      >
        {showInfo ? "hide" : "Show"} info
      </button>
      {showInfo && (
        <Suspense fallback={<span>Loading...</span>}>
          <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      )}

      <button onClick={()=>setVisitHome(true)}>Visit Home</button>
    </div>
  );
};

export default User;
