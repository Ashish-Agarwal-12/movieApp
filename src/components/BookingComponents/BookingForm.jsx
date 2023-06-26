import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import BookingService from "../services/BookingService";
import { toast } from "react-toastify";

function BookingForm(props) {
  const [modalShow, setModalShow] = useState(false);
  const [ticket, setTicket] = useState({});
  const initialValues = {
    slot: {
      slotId: "",
      hall: {
        hallId: "",
      },
    },
    user: {
      userId: "",
    },
    bookingDate: "",
    noOfSeats: "",
  };

  const onSubmit = (values) => {
    console.log("Form Data", values);
    BookingService.addBooking(values)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
    toast.success("Booking Confirmed!!");
  };
  console.log(ticket);

  const [formData, setFormData] = useState({
    
  });

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
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
              <div className="form-control">
                <label htmlFor="slotId">Slot ID</label>
                <Field
                  type="number"
                  name="slot.slotId"
                  id="slot.slotId"
                />
              </div>
              <div className="form-control">
                <label htmlFor="hallId">Hall ID</label>
                <Field
                  type="number"
                  id="slot.hall.hallId"
                  name="slot.hall.hallId"
                />
              </div>
              <div className="form-control">
                <label htmlFor="userId">User ID</label>
                <Field
                  type="number"
                  name="user.userId"
                  id="user.userId"
                />
              </div>
              <div className="form-control">
                <label htmlFor="bookingDate">Booking Date</label>
                <Field
                  type="date"
                  id="bookingDate"
                  name="bookingDate"
                  
                />
              </div>
              <div className="form-control">
                <label htmlFor="noOfSeats">Number of Seats</label>
                <Field
                  type="number"
                  name="noOfSeats"
                  id="noOfSeats"
                />
              </div>
              <Button type="submit" variant="primary">
                Submit
              </Button>
            </Form>
          </Formik>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookingForm;
