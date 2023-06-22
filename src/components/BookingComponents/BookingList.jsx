import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import BookingService from "../services/BookingService";

export default function BookingList() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/getAllBookings'); // Replace with your API endpoint URL
      if (response.ok) {
        const json = await response.json();
        setData(json);
      } else {
        setError('Error: ' + response.status);
      }
    } catch (error) {
      setError('An error occurred while fetching the data.');
    } finally {
      setIsLoading(false);
    }
    console.log(data);
  };

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
            <th>Status</th>
            <th>Seats Booked</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </Table>
    </Container>
  );
}
