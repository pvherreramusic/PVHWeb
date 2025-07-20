import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./CigPlayer.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"; // Import your CSS file for styling

const CigPlayer = () => {
    const [playing, setPlaying] = useState(false);
    const [url, setUrl] = useState(null); // Your audio file URL

    const handlePlay = () => {
        setUrl("https://pvherreramusicfiles.s3.us-east-1.amazonaws.com/01+Selena+Gomez.mp3"); // Replace with your audio file URL
        setPlaying(true);
    };

    return (



        <Card style={{ width: '18rem' }}>

            <Card.Body>
                <Card.Title>Listen to "Selena Gomez" full track from "Cigarettes and Weddings"</Card.Title>
                <Button onClick={handlePlay}>Play Audio</Button>
                <ReactPlayer width={270}
                             height={70}
                             url={url}
                             playing={playing}
                             onEnded={() => {
                                 setPlaying(false);
                                 setUrl(null);
                             }}
                             controls={true} // Optional: Show controls
                             playsinline
                />

            </Card.Body>
        </Card>



    );
};

export default CigPlayer;
