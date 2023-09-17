import React, { useEffect, useState } from 'react';
import { Card, Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Projects() {

    /* Retrieve Project Data */
    const [projectData, setProjectData] = useState({ project: [] });
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/api/projectdata')
            .then(response => response.json())
            .then(projectData => setProjectData(projectData))
            .catch(error => console.error(error));
    }, [])
    console.log(projectData);
    console.log(projectData.project);

    /* Modal Hooks */
    const [selectedItem, setSelectedItem] = useState(null);
    const openModal = (item) => {
        setSelectedItem(item);
    };
    const closeModal = () => {
        setSelectedItem(null);
    }

    if (projectData.project.length === 0) {
        // Handle the case where data is still loading
        return <div>Loading...</div>;
    }

    /* Build and return page */
    return(
        <div>
            <h1 className="projects-header">Projects</h1>
            <Container className="central-container">
                {projectData.project.map((p, index) => (
                    index % 3 === 0 && (
                        <Row key={index}>
                            <Col>{CreateProjectCard(openModal, p)}</Col>
                            {index + 1 < projectData.project.length && <Col>{CreateProjectCard(openModal, projectData.project[index+1])}</Col>}
                            {index + 2 < projectData.project.length && <Col>{CreateProjectCard(openModal, projectData.project[index+2])}</Col>}
                        </Row>
                    )
                ))}
            </Container>
            <Modal show={selectedItem} onHide={closeModal} centered size="lg">
                {selectedItem ? (
                <Modal.Header closeButton><Modal.Title className='projectmodal-title'>{selectedItem.title}</Modal.Title></Modal.Header>
                ) : null}
                {selectedItem ? <Modal.Body>
                    <Container>
                    <Row>
                        <Col>
                            <h4>Skills & Technologies</h4>
                            <p>{selectedItem.skills}</p>
                            <h4>Details</h4>
                            <p>{selectedItem.description}</p>
                        </Col>
                        <Col xs={5}>
                            <img src={"./images/project_images/" + selectedItem.image + ".png"} className='projectmodal-image'></img>
                        </Col>
                    </Row>
                    {selectedItem.github != null ? <Row>
                        <Link to={selectedItem.github}>
                            <Image src="./images/github-icon-dark.png" height={30}></Image>
                        </Link>
                    </Row>: null}
                    </Container>
                </Modal.Body> : null}
            </Modal>
        </div>
    );
}

function CreateProjectCard(openModalHook, project) {
    const imageLocation = "./images/project_images/" + project.image + ".png";

    return(
        <div className="d-flex justify-content-center">
            <Card className='project-card'
                bg='#3F51B5'>
                <Card.Img variant='top' src={imageLocation}></Card.Img>
                <Card.Title className='card-Title'>{project.title}</Card.Title>
                {/* <Card.Text className='card-Description'>{project.description}</Card.Text> */}
                <Button variant="primary" onClick={() => openModalHook(project)}>Details</Button>
            </Card>
        </div>
    )
}

export default Projects;