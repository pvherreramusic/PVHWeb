import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import CigarettesCover from "./images/cover.jpg"



export const CigarettesMusic =  ({ url, fileName }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.api-ninjas.com/v1/counter?id=cigarettes', {
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

        // Increment the download count
        fetch('https://api.api-ninjas.com/v1/counter?id=cigarettes&hit=true', {
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
            <Card.Img variant="top" src= {CigarettesCover}  />
            <Card.Body>
                <Card.Title>LP 1: "Cigarettes and Weddings" - 2012 - Ambient Rock</Card.Title>
                <Card.Text>
                    "Cigarettes and Weddings was released in 2012. It contains 8 tracks, consisting 8 originals. It is the first album by P.V. Herrera"
                    Tracklist:
                    1. Selena Gomez
                    2. The Engagement
                    3. Killer Bears at the Wedding
                    4. The Girl in the Red Flannel
                    5. The Promise
                    6. Secret Ceremony
                    7. Giving Her Away
                    8. The Vow

                </Card.Text>
                <Button type="primary" onClick={handleDownload}>Download The Album for Free</Button>
                <p>All Time Downloads:  {data.value} times total</p>
            </Card.Body>
        </Card>
    )
};

