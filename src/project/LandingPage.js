import React, { useState } from "react";
import dayjs from "dayjs";
import Form from 'react-bootstrap/Form';
import 'react-phone-input-2/lib/style.css'
import 'react-dropdown/style.css';
import Card from '@mui/material/Card';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import './landing.css'
import Calendar from "./Calendar";

const LandingPage = () => {

    const currentDate = dayjs();

    return (
        <div className="main">
            <Card style={{ borderColor: 'red' }}>
                <div className="card-content">
                    <span >
                        <h3 style={{
                            fontFamily: 'Droid Sans', margin: 'auto',
                            width: '50%',
                            padding: '10px'
                        }}>User Registration Form</h3>
                        <Form>
                            <Row>
                                <Col style={{ width: '20px' }}>
                                    <Form.Group style={{ width: '290px' }} controlId="exampleForm.ControlInput1">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="name" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group style={{ width: '290px' }} controlId="exampleForm.ControlInput1">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="name" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>

                            <Col>
                            <Form.Label>Calendar</Form.Label>
                          <Calendar selectDate={ currentDate}/>  
                            </Col>
                            </Row>
                        </Form>
                    </span>
                </div>
            </Card>
        </div>
    )
}

export default LandingPage;
