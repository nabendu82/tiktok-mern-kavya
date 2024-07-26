import './Video.css'
import { useState, useRef } from 'react'
import VideoFooter from './VideoFooter'

const Video = () => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    const handleVideoPress = () => {
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <div className="video">
            <video 
                className="video__player" 
                loop
                ref={videoRef}
                onClick={handleVideoPress} 
                src="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
            >
            </video>
            <VideoFooter />
        </div>
    )
}
export default Video