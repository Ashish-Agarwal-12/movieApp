import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import UserService from "../../services/UserService";

const UserUpdate = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobileNumber, setMobileNumber] = useState(0);

  const handleUpdate = (e) => {
    e.preventDefault();

    // Create an object with the updated data
    const updatedData = {
      userName,
      password,
      userType,
      emailId,
      mobileNumber,
    };

    // Call the update method from the Axios service
    UserService.updateUserById(props.id, updatedData)
      .then((response) => {
        console.log("Update successful");
        // Additional actions after successful update
      })
      .catch((error) => {
        console.error("Update failed", error);
        // Additional error handling
      });
  };

  return (
    // <Form onSubmit={handleUpdate}>
    //   <Form.Group controlId="formId">
    //     <Form.Label>ID</Form.Label>
    //     <Form.Control type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter ID" />
    //   </Form.Group>

    //   <Form.Group controlId="formName">
    //     <Form.Label>Name</Form.Label>
    //     <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
    //   </Form.Group>

    //   <Form.Group controlId="formEmail">
    //     <Form.Label>Email</Form.Label>
    //     <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
    //   </Form.Group>

    //   <Button variant="primary" type="submit">Update</Button>
    // </Form>
    <div className="modal-container">
      <div className="modal-content">
        <Form onSubmit={handleUpdate}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="userName">User Name</Form.Label>
            <Form.Control
              type="text"
              name="userName"
              value={props.body.userName}
              placeholder="Enter the UserName"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="text"
              name="password"
              value={props.body.password}
              placeholder="Enter the Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="emailId">Email Id</Form.Label>
            <Form.Control
              type="email"
              name="emailId"
              value={props.body.emailId}
              placeholder="Enter the Email Id"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="userType">User Type</Form.Label>
            <Form.Control
              type="text"
              name="userType"
              value={props.body.userType}
              placeholder="Enter either user/admin"
              onChange={(e) => setUserType(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="mobileNumber">Mobile Number</Form.Label>
            <Form.Control
              type="text"
              name="mobileNumber"
              value={props.body.mobileNumber}
              placeholder="Enter either user/admin"
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UserUpdate;
