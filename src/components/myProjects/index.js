import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// -- Import Components --
import Sidebar from "../sidebar";

export default class MyProjects extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-start">
                    <Col>
                        <Sidebar component="My Projects"/>
                    </Col>
                    <Col>
                        <h1>All projects</h1>
                        <ul>
                            <li>one</li>
                            <li>one</li>
                            <li>one</li>
                            <li>one</li>
                            <li>one</li>
                            <li>one</li>
                            <li>one</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}