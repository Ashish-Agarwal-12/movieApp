import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import BookingService from "../services/BookingService";

export default function BookingList() {
  const [bookings, setBookings] = useState([]);
  
  useEffect(()=> {
    BookingService.getAllBookings()
    .then((response) => {
      setBookings(response.data);
    })
    .catch((error) => console.log(error));
  },[])

  return (
    <Container>
      <Table striped>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Slot ID</th>
            <th>Hall Name</th>
            <th>User Name</th>
            <th>Booking Date</th>
            <th>Seats Booked</th>
            <th>Booking Status</th>
          </tr>
        </thead>
        <tbody>
          {
            bookings.map((booking) => {
              return(
                <tr key={booking.bookingId}>
                  <td>{booking.bookingId}</td>
                  <td>{booking.slot.slotId}</td>
                  <td>{booking.slot.hall.hallName}</td>
                  <td>{booking.user.userName}</td>
                  <td>{booking.bookingDate}</td>
                  <td>{booking.noOfSeats}</td>
                  <td>{booking.status}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Container>
  );
}
