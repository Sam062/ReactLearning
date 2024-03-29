import { Button } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react';
import './ImageUpload.css';

function ImageUpload({ setNewPost }) {

    const [caption, setCaption] = useState('');
    const [url, setUrl] = useState('');
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState(null);
    const [username, setUsername] = useState('');

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
            console.log("========================");
            console.log(e);
            console.log(e.target);
            console.log(e.target.files);
            console.log(e.target.files[0]);
            console.log("========================");
        }
    };
    const handleUpload = () => {
        console.log(image);
        const uploadTask = axios.post('http://localhost:9695/savePost', {
            "imageUrl": image.name,
            "caption": caption,
            "username": username
        })
            .then((response) => {
                console.log(response);
                // window.location.reload();
                setNewPost((prevState) => !prevState);
            })
            .catch(function (error) {
                console.log(error);
            });

        // uploadTask.on(
        //     "state_changed",
        //     (snapshot) => {
        //         //progress function
        //         const progress = Math.round(
        //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //         );
        //         setProgress(progress)
        //     },
        //     (error) => {
        //         //error function
        //         alert(error.message);
        //     },
        //     () => {
        //         //upload complete function
        //         axios.post('', data);
        //         setProgress(0);
        //         setCaption("");
        //         setImage(null);
        //     }
        // )
    };


    return (
        <div className='imageUpload'>
            <progress value={progress} max="100" hidden />
            <input type="text" placeholder="Enter username" onChange={event => setUsername(event.target.value)} name={username} value={username} />
            <input type="text" placeholder="Enter a caption..." onChange={event => setCaption(event.target.value)} name={caption} value={caption} />
            <input type="file"
                onChange={handleChange}
            />
            <Button onClick={handleUpload}>
                Upload
            </Button>

        </div>
    )
}

export default ImageUpload