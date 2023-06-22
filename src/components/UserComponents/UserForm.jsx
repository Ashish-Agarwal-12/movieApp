import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import UserService from "../services/UserService";
import { toast } from "react-toastify";

const UserForm = (props) => {
  const [data, setData] = useState({
    userName: "",
    password: "",
    userType: "",
    emailId: "",
    mobileNumber: "",
  });

  const handleChange = (e, property) => {
    setData({ ...data, [property]: e.target.value });
    console.log(data);
  };

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    UserService.createUser(data)
      .then((response) => {
        setData({
          userName: "",
          password: "",
          userType: "",
          emailId: "",
          mobileNumber: ""
        });
        setError({
          errors: {},
          isError: false
        });
        toast.success("Updated Successsfully");
      })
      .catch((error) => {
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book Your Ticket
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="userName">User Name</Form.Label>
            <Form.Control
              type="text"
              name="userName"
              placeholder="Enter the UserName"
              onChange={(e) => handleChange(e, "userName")}
              isInvalid={error.errors?.response?.data?.userName ? true : false}
            />
            <Form.Text>{error.errors?.response?.data?.userName}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="text"
              name="password"
              placeholder="Enter the Password"
              onChange={(e) => handleChange(e, "password")}
              isInvalid={error.errors?.response?.data?.password ? true : false}
            />
            <Form.Text>{error.errors?.response?.data?.password}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="emailId">Email Id</Form.Label>
            <Form.Control
              type="email"
              name="emailId"
              placeholder="Enter the Email Id"
              onChange={(e) => handleChange(e, "emailId")}
              isInvalid={error.errors?.response?.data?.emailId ? true : false}
            />
            <Form.Text>{error.errors?.response?.data?.emailId}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="userType">User Type</Form.Label>
            <Form.Control
              type="text"
              name="userType"
              placeholder="Enter either user/admin"
              onChange={(e) => handleChange(e, "userType")}
              isInvalid={error.errors?.response?.data?.userType ? true : false}
            />
            <Form.Text>{error.errors?.response?.data?.userType}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="mobileNumber">Mobile Number</Form.Label>
            <Form.Control
              type="text"
              name="mobileNumber"
              placeholder="Enter your Mobile Number"
              onChange={(e) => handleChange(e, "mobileNumber")}
              isInvalid={
                error.errors?.response?.data?.mobileNumber ? true : false
              }
            />
            <Form.Text>{error.errors?.response?.data?.mobileNumber}</Form.Text>
          </Form.Group>
          <div className="btn-group gap-4" role="group">
            <Button
              variant="primary"
              type="submit"
              style={{ borderRadius: "8px" }}
            >
              Submit
            </Button>
            <Button onClick={props.onHide}>Close</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UserForm;
