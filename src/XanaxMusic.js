import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import XanaxCover from "./images/cover2.jpg"

export const XanaxMusic = ({ url, fileName }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.api-ninjas.com/v1/counter?id=xanax', {
            method: 'GET',
            headers: {
                'X-Api-Key': 'L6XvFN6mBJgwe5Ay7GRzHw==dQ9QMHkYL16Hiu88',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(jsonData => setData(jsonData))
            .catch(error => console.error('Error fetching data:', error));
    }, []);



    const handleDownload = () => {
        fetch('https://api.api-ninjas.com/v1/counter?id=xanax&hit=true', {
            method: 'GET',
            headers: {
                'X-Api-Key': 'L6XvFN6mBJgwe5Ay7GRzHw==dQ9QMHkYL16Hiu88',
                'Content-Type': 'application/json'
            }
        })



        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement("a");
                link.href = url;
                link.download = fileName || "downloaded-file";
                document.body.appendChild(link);

                link.click();

                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            })
            .catch((error) => {
                console.error("Error fetching the file:", error);
            });
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {XanaxCover}  />
            <Card.Body>
                <Card.Title>LP 2: "Xanax and Mercy" - 2019 - Instrumental Rock</Card.Title>
                <Card.Text>
                    "Xanax and Mercy was released in 2019. It contains 10 tracks, consisting 2 themes and 8 orignals.It is the first album to contain new material since 2012's "Cigarettes and Weddings".
                    Tracklist:
                    1. Theme 1 Chronicles of the Unknown
                    2. The Beaten Path
                    3. The Unforgiven
                    4. Summer Breakup
                    5. Have Been Altered
                    6. Theme 2 Paightenville Phantom
                    7. The Roommate
                    8. A Thousand No’s
                    9. Flowers
                    10. Surf Worshiper

                </Card.Text>
                <Button type="primary" onClick={handleDownload}>Download The Album for Free</Button>
                <p>All Time Downloads:  {data.value} times total</p>
            </Card.Body>
        </Card>
    )
};
