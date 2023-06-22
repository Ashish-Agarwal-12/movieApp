import { useEffect, useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import UserService from "../services/UserService";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserUpdate = () => {
  const location = useLocation();
  const user = location.state;
  const navigate = useNavigate();
  const [data, setData] = useState({
    userId: 0,
    userName: "",
    password: "",
    userType: "",
    emailId: "",
    mobileNumber: "",
  });

  useEffect(() => {
    UserService.fetchUserById(user.userId)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(data);

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
    console.log(data);
    UserService.updateUserById(data.userId, data)
      .then(() => {
        setData({
          userName: "",
          password: "",
          userType: "",
          emailId: "",
          mobileNumber: "",
        });
        toast.success("Updated Successsfully");
        navigate("/users");
      })
      .catch((error) => {
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  console.log(error);
  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="userName">User Name</Form.Label>
          <Form.Control
            type="text"
            name="userName"
            placeholder="Enter the UserName"
            onChange={(e) => handleChange(e, "userName")}
            value={data.userName}
            isInvalid= { error.errors?.response?.data?.userName ? true: false }
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
            value={data.password}
            isInvalid= { error.errors?.response?.data?.password ? true: false }
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
            value={data.emailId}
            isInvalid= { error.errors?.response?.data?.emailId ? true: false }
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
            value={data.userType}
            isInvalid= { error.errors?.response?.data?.userType ? true: false }
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
            value={data.mobileNumber}
            isInvalid= { error.errors?.response?.data?.mobileNumber ? true: false }
          />
          <Form.Text>{error.errors?.response?.data?.mobileNumber}</Form.Text>
        </Form.Group>
        <Container>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default UserUpdate;
