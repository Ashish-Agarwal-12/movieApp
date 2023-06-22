import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import TicketService from "./services/TicketService";

function Ticket() {
  //   const location = useLocation();
  //   const data = location.state;
  //   console.log(data, "hello");

  const [tickets, setTickets] = useState([]);

  useEffect(
    TicketService.getAllTickets().then((response) => setTickets(response.data)),
    []
  );

  return (
    <Container>
      <Table striped>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Booking Date</th>
            <th>Start time</th>
            <th>User Name</th>
            <th>No. of Seats</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => {
            <tr key={ticket.ticketId}>
              <td>{ticket.ticketId}</td>
              <td>{ticket.date}</td>
              <td>{ticket.startTime}</td>
              <td>{ticket.userName}</td>
              <td>{ticket.noOfSeats}</td>
              <td>{ticket.totalAmount}</td>
            </tr>;
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Ticket;
