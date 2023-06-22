import { useState } from "react";
import { Button, Modal, Col, Row, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import MovieService from "../services/MoviesService";
import { toast } from "react-toastify";

const MovieForm = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    genre: "",
    duration: 0,
    releaseDate: "",
    slots: [
      {
        hall: {
          hallId: 0,
        },
        startTime: "",
        slotDate: "",
        duration: "",
        capacity: 0,
        amount: 0.0,
      },
    ],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    console.log(formData);
  };

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    MovieService.createMovie(formData)
      .then((response) => {
        setFormData({
          title: "",
          description: "",
          genre: "",
          duration: 0,
          releaseDate: "",
          slots: [
            {
              startTime: "",
              slotDate: "",
              duration: "",
              capacity: 0,
              amount: 0.0,
            },
          ],
        });
        setError({
          errors: {},
          isError: false,
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
        <Modal.Title id="contained-modal-title-vcenter">Add Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <h1>Add Movie</h1>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="genre">
                  <Form.Label>Genre</Form.Label>
                  <Form.Control
                    type="text"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="duration">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="releaseDate">
                  <Form.Label>Release Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="releaseDate"
                    value={formData.releaseDate}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="hallId">
                  <Form.Label>Hall ID</Form.Label>
                  <Form.Control
                    type="number"
                    name="slots[0].hall.hallId"
                    value={formData.slots[0].hall.hallId}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="startTime">
                  <Form.Label>Start Time</Form.Label>
                  <Form.Control
                    type="text"
                    name="slots[0].startTime"
                    value={formData.slots[0].startTime}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="slotDate">
                  <Form.Label>Slot Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="slots[0].slotDate"
                    value={formData.slots[0].slotDate}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="slotDuration">
                  <Form.Label>Slot Duration</Form.Label>
                  <Form.Control
                    type="text"
                    name="slots[0].duration"
                    value={formData.slots[0].duration}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="capacity">
                  <Form.Label>Capacity</Form.Label>
                  <Form.Control
                    type="number"
                    name="slots[0].capacity"
                    value={formData.slots[0].capacity}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="amount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.01"
                    name="slots[0].amount"
                    value={formData.slots[0].amount}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="imageUrl">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default MovieForm;
