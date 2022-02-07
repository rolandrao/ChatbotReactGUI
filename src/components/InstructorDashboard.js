import React from "react";
import "../css/dash.css"
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import DataTable from './DataTable';
import Container from 'react-bootstrap/Container';

const InstructorDashboard = () => (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row id="tabs-container">
            <Col sm={4}>
                <Nav variant="pills"  className="flex-column">
                    <Nav.Item >
                        <Nav.Link eventKey="first">Unanswerable Questions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link eventKey="second">Chat Logs</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col sm={8}>
                <Tab.Content>
                    <Tab.Pane id="tab-1" eventKey="first">
                        <DataTable type="Unanswerable"/>
                    </Tab.Pane>
                    <Tab.Pane id='tab-2' eventKey="second">
                        <DataTable type="Normal"/>
                    </Tab.Pane>
                </Tab.Content>
            </Col>
        </Row>
    </Tab.Container>
);

export default InstructorDashboard;