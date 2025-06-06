import React from 'react'
import './videoPlayer.css'

function VideoPlayer() {
  return (
    <div className='video-container'>
        <h1 className='video-title'>Watch Video</h1>
        <video className='video-player' controls>
  <source src="/275498_tiny.mp4" type="video/mp4" />
  Your browser does not support the video tag
</video>
    </div>
  )
}

export default VideoPlayer