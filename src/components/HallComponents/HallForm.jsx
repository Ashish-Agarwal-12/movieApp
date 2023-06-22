import { useState } from "react";
import { Button, Modal, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import HallService from "../services/HallService";
import { toast } from "react-toastify";

const HallForm = (props) => {
  const [data, setData] = useState({
    hallName: "",
    address: "",
    totalCapacity: ""
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
    HallService.addHall(data)
      .then((response) => {
        setError({
          errors: {},
          isError: false,
        });
        toast.success("Added Successsfully");
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
          Create a new Hall
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group>
            <Form.Label htmlFor="hallName">Hall Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the Hall Name"
              id="hallName"
              onChange={(e) => handleChange(e, "hallName")}
              isInvalid={error.errors?.response?.data?.hallName ? true : false}
            />
            <Form.Text style={{ color: "red" }}>
              {error.errors?.response?.data?.hallName}
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="address">Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please Enter the Address of Hall"
              id="address"
              onChange={(e) => handleChange(e, "address")}
              isInvalid={error.errors?.response?.data?.address ? true : false}
            />
            <Form.Text style={{ color: "red" }}>
              {error.errors?.response?.data?.address}
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="totalCapacity">Total Capacity</Form.Label>
            <Form.Control
              id="totalCapacity"
              type="number"
              placeholder="Enter the total Capacity"
              onChange={(e) => handleChange(e, "totalCapacity")}
              value={data.totalCapacity}
              isInvalid={error.errors?.response?.data?.totalCapacity ? true : false}
            />
            <Form.Text style={{ color: "red" }}>
              {error.errors?.response?.data?.totalCapacity}
            </Form.Text>
          </Form.Group>
          <Container style={{ textAlign: "center" }} className="mb-3">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default HallForm;
