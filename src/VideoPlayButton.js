import React from 'react'
import './VideoPlayButton.css'
import { PlayArrow } from '@mui/icons-material';

const VideoPlayButton = ({onVideoClick}) => {
    return (
        <div className="video_play_button">
            <PlayArrow onClick={onVideoClick} className="video_play_icon" />
        </div>
    )
}

export default VideoPlayButton