import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {XanaxMusic} from "./XanaxMusic";
import XanaxPlayer from "./XanaxPlayer";
import {CigarettesMusic} from "./CigarettesMusic";
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import PVH1 from "./images/perferomce.jpg"
import PVH2 from "./images/IMG_1605.jpg";
import PVH3 from "./images/IMG_1513.jpg";
import CigPlayer from "./CigPlayer";
import PVH4 from "./images/IMG_4476 (1).jpg";
import './HomeCard.css';


const XanaxandMercydownload =
    "https://pvherreramusicfiles.s3.us-east-1.amazonaws.com/Xanax+and+Mercy+MP3.zip";

const CigarettesandWeddingsdownload =
    "https://pvherreramusicfiles.s3.us-east-1.amazonaws.com/Cigarettes+and+Weddings.zip";


function YoutubeEmbed({embedId}) {
    return (
        <div className="iframe-container">
        <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${embedId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen

        ></iframe>
        </div>
    );
}

function HomeCard() {
    return (
        <Tabs
            defaultActiveKey="Music"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"

        >
            <Tab eventKey="Music" title="Music">
                <Stack direction="horizontal" gap={3}>
                    <div className="p-2">
                        <XanaxMusic
                            url={XanaxandMercydownload}
                            fileName="/Xanax+and+Mercy.zip"
                        />

                        <XanaxPlayer/>

                    </div>

                    <div className="p-2">
                        <CigarettesMusic
                            url={CigarettesandWeddingsdownload}
                            fileName="/Cigarettes+and+Weddings.zip"
                        />
                        <CigPlayer/>

                    </div>

                    <Image
                        style={{
                            width: "50",
                            justifyContent: "center"
                        }}


                        src={PVH1}/>;
                </Stack>
            </Tab>
            <Tab eventKey="About" title="About">
                <Stack direction="horizontal" gap={2}>
                    <Image
                        style={{
                            width: "50",
                            justifyContent: "center"
                        }}


                        src={PVH4}/>;
                    <Image
                        style={{
                            width: "50",
                            justifyContent: "center"
                        }}


                        src={PVH2}/>;

                    <Image
                        style={{
                            width: "50",
                            justifyContent: "center"
                        }}


                        src={PVH3}/>;


                </Stack>


                <h1> About the Musician</h1>
                PV Herrera has been active in the music scene of the Central Coast, CA from 2008 to Present. Originally
                from Los Gatos, he moved to the central coast for better health due to his restricted air way. He was
                given guitar lessons at the age of 13 at a small music lesson school. His first project was called The
                Danger Girl Starship where he wrote the majority of his work, starting in 2008. Under his personal stage
                name, he has released two albums. Those albums are: "Cigarettes and Weddings" and "Xanax and Mercy".
                Download those works for free on this site.


                <h1> Featured Studio Video</h1>
                <YoutubeEmbed embedId="xl4MksTBR6I?si=p_BSS9PyzIb1epts"
                              style={{

                                   justifyContent: "center"
                               }}



                />


            </Tab>
            <Tab eventKey="contact" title="Contact">
                Tab content for Contact
            </Tab>
        </Tabs>
    );


}

export default HomeCard;
