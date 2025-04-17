import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {name,phone,email,id}=user;
    const userStyle={
        border:'2px solid yellow',
        borderRadius:'20px',
        padding:'10px',
        margin:'10px'
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small> phone: {phone}</small></p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;