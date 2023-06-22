import React, { useEffect, useState } from "react";
import { Card, Container, Form, Button, Row, Col, ToastContainer } from "react-bootstrap";
import UserService from "./services/UserService";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function () {
  const [data, setData] = useState({
    userName: "",
    password: "",
    userType: "",
    emailId: "",
    mobileNumber: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

//   useEffect(() => {
//     console.log(data);
//   }, [data]);

  const handleChange = (e, property) => {
    setData({ ...data, [property]: e.target.value });
  };

  const handleReset = (e) => {
    setData({
      userName: "",
      password: "",
      userType: "",
      emailId: "",
      mobileNumber: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   try{
    UserService.createUser(data).then((response) => {
        console.log(response.data);
        toast.success("Registered SuccesssFully");
        setData({
          userName: "",
          password: "",
          userType: "",
          emailId: "",
          mobileNumber: "",
        });
      }).catch((error)=> {
          setError({
              errors: error,
              isError: true
          });
      });
   } catch (e) {
    toast.error(`${e}`);
   }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col>
          <Card className="bg-dark text-light">
            <Card.Header>Fill Information to Register</Card.Header>
            <Card.Body>
              <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                  <Form htmlFor="userName">User Name</Form>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    id="userName"
                    onChange={(e) => handleChange(e, "userName")}
                    value={data.userName}
                    isInvalid= { error.errors?.response?.data?.userName ? true: false }
                  />
                  <Form.Text style={{color: "red"}}>{error.errors?.response?.data?.userName}</Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={(e) => handleChange(e, "password")}
                    value={data.password}
                    isInvalid= { error.errors?.response?.data?.password ? true: false }
                  />
                  <Form.Text style={{color: "red"}}>{error.errors?.response?.data?.password}</Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="userType">User Type</Form.Label>
                  <Form.Control
                    id="userType"
                    type="text"
                    placeholder="Enter Either User/Admin"
                    onChange={(e) => handleChange(e, "userType")}
                    value={data.userType}
                    isInvalid= { error.errors?.response?.data?.userType ? true: false }
                  />
                  <Form.Text style={{color: "red"}}>{error.errors?.response?.data?.userType}</Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="emailId">Email ID</Form.Label>
                  <Form.Control
                    id="emailId"
                    type="email"
                    placeholder="Enter your E-mail Address"
                    onChange={(e) => handleChange(e, "emailId")}
                    value={data.emailId}
                    isInvalid= { error.errors?.response?.data?.emailId ? true: false }
                  />
                  <Form.Text style={{color: "red"}}>{error.errors?.response?.data?.emailId}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="mobileNumber">Mobile Number</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter ypur Mobile Number"
                    id="mobileNumber"
                    onChange={(e) => handleChange(e, "mobileNumber")}
                    value={data.mobileNumber}
                    isInvalid= { error.errors?.response?.data?.mobileNumber ? true: false }
                  />
                  <Form.Text style={{color: "red"}}>{error.errors?.response?.data?.mobileNumber}</Form.Text>
                </Form.Group>

                <Container style={{ textAlign: "center" }} className="mb-3">
                  <Button variant="outline-light" type="submit">
                    Submit
                  </Button>
                  <Button
                    variant="secondary"
                    type="reset"
                    className="ms-2"
                    onClick={(e) => handleReset(e)}
                  >
                    Reset
                  </Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
