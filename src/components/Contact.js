/*import React, {useState} from 'react';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import db from '../fire'

let Contact = () => {

    let [state , setState] = useState({
        user : {
            username : '',
            email : '',
            phone_no : ''
        }
    });

    let updateInput = (e) => {
        setState({
            ...state,
            user : {
                ...state.user,
                [e.target.name] : e.target.value
            }
        })
    };

    let contact = (e) => {
        e.preventDefault();
        console.log(state.user);
    };

    

    //const docRef = addDoc(collection(state))

    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col md={3}>
                        <Card className="shadow-lg">
                            <Card.Header className="p-3" style={{backgroundColor: '#ffc107'}}>
                                <h4>Contact Us</h4>
                            </Card.Header>
                            <Card.Body style={{backgroundColor : '#f7f5f0'}}>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            name="username"
                                            onChange={updateInput}
                                            type="text" placeholder="Username"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            name="email"
                                            onChange={updateInput}
                                            type="email" placeholder="Email"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            name="phone_no"
                                            onChange={updateInput}
                                            type="number" placeholder="Contact No"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Button onSubmit={contact} variant="warning" type="submit">Contact Us</Button>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
};
export default Contact;*/

import React, { useState, useEffect } from "react";
import { db } from '../fire';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;