import React, { useContext } from "react";
import {  Table } from "react-bootstrap";
import '../App.css';
import { SlotContext } from "../context/SlotContext";

export default function slotList() {
    const { slots, setSlotId } = useContext(SlotContext);

    const handleDelete = (id) => {
        if(window.confirm("Are you sure you want to delete this data?")) {
            console.log("Calling delete function")
            setSlotId(id);
        }
    }

    const rows =slots.map((slot) => {
        return (
            <tr key={slot.slotId}>
                <td>{slots.indexOf(slot) + 1}</td>
                <td>{slot.hall.hallName}</td>
                <td>{slot.hall.address}</td>
                <td>{slot.startTime}</td>
                <td>{slot.slotDate}</td>
                <td>{slot.duration}</td>
                <td>{slot.capacity}</td>
                <td>{slot.amount}</td>
                <td>
                    <div className="btn-group gap-4" role="group">
                        <button type="button" className="btn btn-primary" style={{ borderRadius: "4px" }}>Edit</button>
                        <button type="button" className="btn btn-danger" style={{ borderRadius: "4px" }} onClick={() => {handleDelete(slot.slotId)}}>Delete</button>
                    </div>
                </td>
            </tr>
        );
    })
    return (
        <div>
            <h1>Slot List</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <td>Slot ID</td>
                        <td>Hall Name</td>
                        <td>Hall Address</td>
                        <td>startTime</td>
                        <td>Date </td>
                        <td>Duration </td>
                        <td>Capacity</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </div>
    );
}
