import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';


function Video() {

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {

        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <video
                onClick={handleVideoPress}
                className="video_player"
                loop
                ref={videoRef}
                src="sample3.mp4" />

            {/* Video Footer */}
            <VideoFooter
                channel="bipinkarki"
                description="test this song"
                song="sing song sing song" />

            {/* VideoSidebar */}
            <VideoSidebar
                likes={100}
                shares={100}
                messages={200} />
        </div>
    )
}

export default Video
