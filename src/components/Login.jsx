import React from "react";
import { useState } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  Form,
  FormGroup,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    userName : "",
    password : ""
  });

  const handleChange = (e, property) => {
    setCredentials({...credentials, [property] : e.target.value});
  }
  
  const handleSubmit = () => {
    localStorage.setItem("userName", credentials.userName);
    localStorage.setItem("password", credentials.password);
    navigate("/home");
  }

  return (
      <Row style={{width: "100%", height: "100%"}}>
        <Col style={{paddingLeft: "530px", paddingRight: "530px", paddingTop: "150px" ,alignContent:"center"}}>
          <Card className="bg-black text-white"> 
            <Card.Header>Welcome to MovieFlix</Card.Header>
            <Card.Body>
              <Form onSubmit={() => handleSubmit()}>
                <FormGroup>
                  <Form.Label htmlFor="userName">UserName</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Email"
                    id="userName"
                    onChange={(e) => {handleChange(e, "userName")}}
                  />
                </FormGroup>
                <FormGroup className="mb-3">
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                    onChange={(e) => {handleChange(e, "password")}}
                  />
                </FormGroup>
                <Container className="mb-3 text-center">
                  <Button variant="outline-light" type="submit">
                    Login
                  </Button>
                </Container>
                <FormGroup>
                  <Form.Text className="text-white">Are you a new User?</Form.Text><br />
                  <Link to="/signUp">Register Yourself</Link>
                </FormGroup>
              </Form>
              </Card.Body>
            </Card>
           </Col>
          </Row>
  );
}
