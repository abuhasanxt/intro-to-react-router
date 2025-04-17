import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post=useLoaderData();
    const {body,title}=post
    return (
        <div style={{border:'2px solid green',margin:'10px',padding:'5px',borderRadius:'20px'}}>
           <h3>Post Details</h3> 
           <h2>{title}</h2>
           <p>{body}</p>
        </div>
    );
};

export default PostDetails;