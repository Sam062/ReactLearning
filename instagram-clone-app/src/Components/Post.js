import React from 'react';
import postImage from '../Icons/PostImage.png';
import avatar from '../Icons/ProfilePic1.JPG';

import './Post.css';
import Avatar from "@mui/material/Avatar";

function Post({ username, caption, imageUrl, setNewPost }) {
    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar
                    className="post__avatar"
                    alt={username}
                    src={imageUrl}
                />
                <h5 className='post__text'><strong>{username}</strong></h5>
            </div>


            <img className='post__image' src={imageUrl} alt="insta_post" />

            <h4 className='post__text'><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default Post