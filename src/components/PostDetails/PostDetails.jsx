import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post=useLoaderData();
    const {body,title}=post;
    const navigate=useNavigate();

    return (
        <div style={{border:'2px solid green',margin:'10px',padding:'5px',borderRadius:'20px'}}>
           <h3>Post Details</h3> 
           <h2>{title}</h2>
           <p>{body}</p>
           <button onClick={()=>(navigate(-1))}>Go back</button>
        </div>
    );
};

export default PostDetails;