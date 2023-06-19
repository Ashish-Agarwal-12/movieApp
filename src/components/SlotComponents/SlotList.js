import React, { useEffect, useState } from "react";
import SlotService from "../services/SlotService";
import { Button, Container, Table } from "react-bootstrap";
import { toast } from "react-toastify";

function SlotList() {
  const [slots, setSlots] = useState([]);

  const fetchData = async () => {
    // const respone = await fetch("http://localhost:8080/getAllSlots");
    // const data = await respone.json();
    // setSlots(data);
    // console.log(data);
    SlotService.getAllSlots()
      .then((response) => setSlots(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <Container>
      <Table className="text-center striped hover">
        <thead>
          <tr>
            <td>Slot Number</td>
            <td>Hall Name</td>
            <td>Start Time</td>
            <td>Slot Date</td>
            <td>Total Capacity</td>
            <td>Amount</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {slots.map((slot) => {
            return (
              <tr key={slot.slotId}>
                <td>{slot.slotId}</td>
                <td>{slot.hall.hallName}</td>
                <td>{slot.startTime}</td>
                <td>{slot.slotDate}</td>
                <td>{slot.capacity}</td>
                <td>{slot.amount}</td>
                <td>
                  <div className="btn-group gap-4" role="group">
                    <Button variant="primary" style={{ borderRadius: "4px" }}>
                      Update
                    </Button>
                    <Button variant="danger" style={{ borderRadius: "4px" }}>
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default SlotList;
