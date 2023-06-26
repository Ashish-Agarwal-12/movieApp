import React, { useEffect, useState } from 'react'
import UserService from "../services/UserService";
import BookingService from "../services/BookingService";
import { Button, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';

export default function MyBookings() {
 
    const [userId, setUserId] = useState(0);
    const [bookings, setBookings] = useState([]);
  
  useEffect(() => {
    UserService.getUserByEmailId(localStorage.getItem("email"))
        .then((response) => {
            BookingService.getBookingsByUserId(response.data.userId)
            .then((bookingResponse) => {
                setBookings(bookingResponse.data);
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
  },[]);

  const handleCancelBooking = (id) => {
    BookingService.cancelBooking(id)
    .then((response) => {
        toast.success("Booking Cancelled");
        window.location.reload(true);
    })
    .catch((error) => console.log(error));
  }
  console.log("My bookings-", bookings);
  return (
    <div className='container'>
        <Table striped>
            <thead>
                <tr>
                    <th>Booking Id</th>
                    <th>Slot No.</th>
                    <th>Booking Date</th>
                    <th>No. of Seats</th>
                    <th>Booking Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    bookings.map((booking) => {
                        return(
                            <tr key={booking.bookingId}>
                                <td>{booking.bookingId}</td>
                                <td>{booking.slot.slotId}</td>
                                <td>{booking.bookingDate}</td>
                                <td>{booking.noOfSeats}</td>
                                <td>{booking.status}</td>
                                <td>
                                    <Button variant='danger' onClick={() => handleCancelBooking(booking.bookingId)}>
                                        Cancel 
                                    </Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    </div>
  )
}
