import {useState} from "react";
import ReactPlayer from "react-player";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./XanaxPlayer.css";

const Player1= () => {
    const [playing, setPlaying] = useState(false);
    const [url, setUrl] = useState(null); // Your audio file URL

    const handlePlay = () => {
        setUrl("https://pvherreramusicfiles.s3.us-east-1.amazonaws.com/SurfWorshipperMix02.mp3"); // Replace with your audio file URL
        setPlaying(true);
    };

    return (



            <Card style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Title>Listen to "Surf Worshiper" full track from "Xanax and Mercy"</Card.Title>
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



export default Player1;