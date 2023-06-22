import React, { useEffect, useState } from "react";
import SlotService from "../services/SlotService";
import { Button, Container, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SlotList() {
  const [slots, setSlots] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    SlotService.getAllSlots()
      .then((response) => setSlots(response.data))
      .catch((error) => console.log(error));
  };

  const handleUpdate = (slot) => {
    navigate("/updateSlot", { state: slot});
  }

  const handleDelete = (id) => {
    SlotService.deleteSlot(id)
      .then((response) => {
        toast.success("Deleted Successfully");
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Container className="text-center mt-3">
        <h1>Slots List</h1>
      </Container>
      <Table className="text-center striped hover mt-4">
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
                    <Button variant="primary" style={{ borderRadius: "4px" }} onClick={() => handleUpdate(slot)}>
                      Update
                    </Button>
                    <Button
                      variant="danger"
                      style={{ borderRadius: "4px" }}
                      onClick={() => handleDelete(slot.slotId)}
                    >
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
