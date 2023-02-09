import logo from './logo.svg';
import './App.css';
import VideoCard from './VideoCard';
import { useState } from 'react';
import ReactPlayer from 'react-player'

function App() {

  const [videos] = useState([
    {
      url: 'https://youtu.be/ekpFWsWyd2Y'//'http://media.w3.org/2010/05/sintel/trailer.mp4'
    },
    {
      url: 'https://res.cloudinary.com/codelife/video/upload/v1633232725/tiktok-clone/tiktok1_np37xq.mp4'
    },
    {
      url: 'https://res.cloudinary.com/codelife/video/upload/v1633232726/tiktok-clone/tiktok3_scmwvk.mp4'
    },
    {
      url: 'http://media.w3.org/2010/05/sintel/trailer.mp4'
    },
    {
      url: 'https://res.cloudinary.com/codelife/video/upload/v1633232726/tiktok-clone/tiktok3_scmwvk.mp4'
    },
  ])

  return (
    <ReactPlayer
       // ref={videoRef}
        url= "https://youtu.be/ekpFWsWyd2Y"
        preload="true"
       // alt="IG reel video"
        loop
        //controls
      />
  );
}

export default App;
