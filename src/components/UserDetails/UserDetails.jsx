import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user =useLoaderData();
    const {website,name,}=user;
    return (
        <div style={{border:'2px solid blue',padding:'10px',margin:'5px',borderRadius:'20px'}}>
            <h3>user details here</h3>
            <p>website: {website}</p>
            <h5>Name: {name}</h5>
            
        </div>
    );
};

export default UserDetails;