import React, { useState, useRef, useEffect } from 'react'
import "./VideoCard.css"
import useElementOnScreen from './useElementOnScreen';
import VideoPlayButton from './VideoPlayButton';
import ReactPlayer from 'react-player'


function VideoCard({url}) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const  videoRef = useRef(null);

    const options = {
        rootMargin: "0px",
        threshold: [0.25, 0.75]
      };

    const isVisibile = useElementOnScreen(options, videoRef)

    const onVideoPress = () => {
        if (isVideoPlaying) {
           //stop 
           videoRef.current.pause()
           setIsVideoPlaying(false)
        } else {
            //play
            videoRef.current.play()
            setIsVideoPlaying(true)
        }
    }

      useEffect(() => {
        if (isVisibile) {
          if (!isVideoPlaying) {        
            videoRef.current.play();
            setIsVideoPlaying(true)
          }
        }
        else {
          if (isVideoPlaying) {        
            videoRef.current.pause();
            setIsVideoPlaying(false)
          }
        }
      }, [isVisibile])


  return (
      <ReactPlayer
       // ref={videoRef}
        onClick={onVideoPress}
        url= {url}
        preload="true"
       // alt="IG reel video"
        loop
        controls
      />
  );
}

export default VideoCard