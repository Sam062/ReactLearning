import logo from './logo.svg';
import './App.css';
import instagramLogo from './Icons/instagram.png';
import Post from '../src/Components/Post'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Avatar from "@mui/material/Avatar"

import { Button, Input } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Modal } from '@mui/material';
import ImageUpload from './Components/ImageUpload';
// import InstagramEmbed from 'react-instagram-embed';


function getModelStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: 'whitesmoke',
    border: '2px solid #fafafa',
    boxShadow: 'gray',
    padding: '7rem 7rem 7rem',
  },
}
));


function App() {

  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [modelStyle] = useState(getModelStyle);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewPost, setNewPost] = useState(false);

  useEffect(() => {
    // Run the fetch posts code
    axios.get('http://localhost:9695/instaPosts')
      .then(response => {
        setPosts(response.data)
      })
  }, [isNewPost]);

  const signUp = (event) => {
    event.preventDefault();
    console.log(email)
    console.log(password)
  }

  return (
    <div className="app">

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <div style={modelStyle} className={classes.paper}>
          <form className='app_signup'>
            <center>
              <img src={instagramLogo} className="app_imageHeader" alt="" height="30rem" />
              <Input placeholder='Username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
              <Input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
              <Button onClick={signUp}>Sign Up</Button>
            </center>
          </form>

        </div>
      </Modal>

      <div className="app_header">
        <img src={instagramLogo} className="app_imageHeader" alt="Insta-logo" height="30rem" />
        <Button style={{ "marginLeft": "65rem" }} onClick={() => setOpen(true)}>Sign Up</Button>
      </div>
      <br /><br /><br />
      <h1 className='display-6'>Hello Developer, Welcome to Instagram...</h1>
      <div style={{ "display": "flex" }}>
        <div>
          <div className='app_posts'>
            {
              posts.map(post => (
                <Post key={post.postId} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
              ))
            }
          </div>

          {/* <InstagramEmbed
        url='https://instagr.am/p/Zw9o4/'
        clientAccessToken='123|456'
        maxWidth={320}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => { }}
        onSuccess={() => { }}
        onAfterRender={() => { }}
        onFailure={() => { }}
      /> */}
        </div>
        <div>
          <h1 className='display-1'>Hello side bard</h1>
        </div>
      </div>
      <ImageUpload username={username} setNewPost={setNewPost} />
    </div>
  );
}

export default App;