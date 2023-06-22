import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import BookingService from "../services/BookingService";
import "./Booking.css";

function BookingPage() {
  const location = useLocation();
  const data = location.state;
  const [modalShow, setModalShow] = useState({});
  const navigate = useNavigate();
  const [ticket, setTicket] = useState([]);

  const addBooking = {
    bookingId: 2,
    slot: {
      slotId: 1,
      hall: {
        hallId: 1,
      },
    },
    user: {
      userId: 1,
    },
    bookingDate: "2023-06-23",
    noOfSeats: 7,
  };

  const handleSubmit = () => {
    BookingService.addBooking(addBooking)
      .then((response) => {
        console.log(response);
        setTicket(response.data);
      })
      .catch((error) => console.log(error));
      navigate("/tickets", { state:  ticket  });
  };
  return (
    <Container>
      <div>
        <Row className="mt-5">
          <Col />
          <Col className="movie-image-section">
            <Card className="movie-card">
              <Card.Img src="https://m.media-amazon.com/images/M/MV5BMWQxYzVjNGQtYTNiZC00OWViLWFiNDktYzNhZWM5YjRmZWNhXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg"></Card.Img>
            </Card>
          </Col>
          <Col className="movie-description-section">
            <h1 className="title">{data.movie.title}</h1>
            <h3 className="genre">Genre- {data.movie.genre}</h3>

            <h4 className="releaseDate">
              <strong>Releasing Date:-</strong>
              {data.movie.releaseDate}
            </h4>
            <h5 className="duration">
              <strong>Duration:- </strong>
              {data.movie.duration}
              <strong> Hours</strong>
            </h5>
            <strong style={{ color: "red", fontWeight: "bold" }}>
              <u>Description</u>
            </strong>
            <p className="description">{data.movie.description}</p>
          </Col>
          <Col></Col>
        </Row>
        <Container className="text-center md-4">
          <Button className="mt-5" onClick={() => handleSubmit()}>
            Book Tickets
          </Button>
          <BookingForm
            show={modalShow}
            movie={data.movie}
            onHide={() => setModalShow(false)}
          />
        </Container>
      </div>
    </Container>
  );
}

export default BookingPage;
