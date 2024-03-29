import React, { useState } from 'react';
import postImage from '../Icons/PostImage.png';
import avatar from '../Icons/ProfilePic1.JPG';

import './Post.css';
import Avatar from "@mui/material/Avatar";
import { Button } from '@mui/material';

function Post({ username, caption, imageUrl, setNewPost }) {
    const postActionStyle = { "marginLeft": "0rem" };
    const [like, setLike] = useState(false);
    const likeCount = 1000;
    return (
        <div className='post border rounded'>
            <div className='post__header'>
                <Avatar
                    className="post__avatar"
                    alt={username}
                    src={imageUrl}
                />
                <h5 className='post__text'><strong>{username}</strong></h5>
            </div>

            <img className='post__image' src={imageUrl} alt="insta_post" onDoubleClick={() => setLike((prev) => !prev)} />

            <div className='border-top p-2'>
                <button className='btn border-0' onClick={() => setLike((prev) => !prev)}>
                    <span>
                        {
                            like ?
                                <svg xmlns="http://www.w3.org/2200/svg" width="22" height="22" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2200/svg" width="22" height="22" fill="currentColor" className="bi bi-heart-fill text-danger" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                </svg>
                        }
                    </span>
                </button>
                <button className='btn border-0'>

                    <span style={postActionStyle}>
                        <svg xmlns="http://www.w3.org/2200/svg" width="22" height="22" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16">
                            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                        </svg>
                    </span>
                </button>
                <button className='btn border-0'>

                    <span style={postActionStyle}>
                        <svg xmlns="http://www.w3.org/2200/svg" width="22" height="22" fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.221L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                        </svg>
                    </span>
                </button>
                <span style={{ marginLeft: "16rem" }}>
                    <svg xmlns="http://www.w3.org/2200/svg" width="22" height="22" fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                    </svg>
                </span>
            </div>
            <p style={{ marginLeft: "1rem", fontWeight: "400" }}>{likeCount} likes</p>
            <h4 className='post__text' style={{ marginTop: "-1rem" }}><strong>{username}</strong> {caption}</h4>


            {/* comment form section */}
            <div className='border-top'>
                <div style={{ display: "flex" }} className="ms-3 me-3 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-emoji-smile mt-1 text-muted" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                    </svg>
                    <input className='form-control border-0' type="text" placeholder='Add a comment...' />
                    <Button className='btn ms-2  border-0'>Post</Button>
                </div>
            </div>
        </div>
    )
}

export default Post