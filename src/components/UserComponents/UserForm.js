import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import UserService from "../../services/UserService";

const UserForm = ({ onClose }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobileNumber, setMobileNumber] = useState(0);

  const handleChange = (e) => {
    switch (e.target.name) {
      case "userName":
        setUserName(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "userType":
        setUserType(e.target.value);
        break;
      case "emailId":
        setEmailId(e.target.value);
        break;
      case "mobileNumber":
        setMobileNumber(e.target.value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      userName: userName,
      password: password,
      userType: userType,
      emailId: emailId,
      mobileNumber: mobileNumber,
    };
    console.log(JSON.stringify(newUser));
    UserService.createUser(newUser)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    window.location.reload(true);
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="userName">User Name</Form.Label>
            <Form.Control
              type="text"
              name="userName"
              placeholder="Enter the UserName"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="text"
              name="password"
              placeholder="Enter the Password"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="emailId">Email Id</Form.Label>
            <Form.Control
              type="email"
              name="emailId"
              placeholder="Enter the Email Id"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="userType">User Type</Form.Label>
            <Form.Control
              type="text"
              name="userType"
              placeholder="Enter either user/admin"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="mobileNumber">Mobile Number</Form.Label>
            <Form.Control
              type="text"
              name="mobileNumber"
              placeholder="Enter either user/admin"
              onChange={handleChange}
            />
          </Form.Group>

          <div className="btn-group gap-4" role="group">
            <Button variant="primary" type="submit" style={{ borderRadius: "8px" }}>
              Submit
            </Button>
            <Button
              variant="secondary"
              onClick={onClose}
              style={{ borderRadius: "8px" }}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </div>
      <div className="overlay" onClick={onClose} />
    </div>
  );
};

export default UserForm;
