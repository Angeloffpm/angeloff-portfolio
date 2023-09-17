import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Component } from 'react-bootstrap';

function Home() {
    const [data, setData] = useState([]);
    const [showImage, setShowImage] = useState(false);

    // useEffect(() => {
    //     fetch('/biography')
    //         .then(response => response.text())
    //         .then(data => setData(data))
    //         .catch(error => console.error(error));
    // }, []);
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/api/biography')
            .then(response => response.text())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowImage(true);
        }, 300);

        return () => clearTimeout(timeout);
    }, []);

    return(
        <div>
            <h1 className="aboutme-header">About Me</h1>
            <Container className="central-container">
                <Row>
                    <Col><pre className={`bio ${showImage ? 'show' :''}`}>{data}</pre></Col>
                    <Col align="center"><img className={`headshot ${showImage ? 'show' :''}`} 
                    src="./images/headshot.jpg"></img></Col>
                </Row>
                <Row>
                    <h1 className={`skillsh1 ${showImage ? 'show' :''}`}>Skills & Languages</h1>
                </Row>
                <Row>
                    <img className={`skills-image ${showImage ? 'show' :''}`} src="./images/portfolio_languages.png"></img>
                </Row>
                <Row>
                    <ul className='skills-list'>
                        <li><strong>Agile Methodologies: </strong>Have worked in Agile developmental environments including frameworks such as Scrum and Kanban</li>
                        <li><strong>MySQL: </strong>Most experience I have with SQL was done in the MySQL system.</li>
                        <li><strong>Express and React: </strong>This website was built using the Express back-end application framework, as well as the React library for the front-end!</li>
                        <li><strong>Prototyping: </strong>One of the key aspects of good design is the prototyping phase. I have experience with prototyping software such as Figma, as well as paper/physical prototyping</li>
                    </ul>
                </Row>
            </Container>
        </div>
    );
}

export default Home;
