import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

function BookingForm(props) {

  const[modalShow,setModalShow] = useState(false);

  const [formData, setFormData] = useState({
    slot: {
      slotId: '',
      hall: {
        hallId: ''
      }
    },
    user: {
      userId: ''
    },
    bookingDate: '',
    noOfSeats: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Displaying the form data in the desired format
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
        <div className="container">
          <h1>Booking Form</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="bookingId">
              <Form.Label>Booking ID</Form.Label>
              <Form.Control
                type="number"
                name="bookingId"
                value={formData.bookingId}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="slotId">
              <Form.Label>Slot ID</Form.Label>
              <Form.Control
                type="number"
                name="slot.slotId"
                value={formData.slot.slotId}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="hallId">
              <Form.Label>Hall ID</Form.Label>
              <Form.Control
                type="number"
                name="slot.hall.hallId"
                value={formData.slot.hall.hallId}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="userId">
              <Form.Label>User ID</Form.Label>
              <Form.Control
                type="number"
                name="user.userId"
                value={formData.user.userId}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="bookingDate">
              <Form.Label>Booking Date</Form.Label>
              <Form.Control
                type="date"
                name="bookingDate"
                value={formData.bookingDate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="noOfSeats">
              <Form.Label>Number of Seats</Form.Label>
              <Form.Control
                type="number"
                name="noOfSeats"
                value={formData.noOfSeats}
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookingForm;
