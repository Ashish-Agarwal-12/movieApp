import React, { useContext, useState } from "react";
import { Button, Table } from "react-bootstrap";
import '../App.css';
import { HallContext } from "../context/HallContext";
import HallForm from "./HallForm";

export default function HallList() {
    const { halls, setHallId } = useContext(HallContext);

    const [showForm, setShowForm] = useState(false);

     const openForm = () => {
        setShowForm(true);
    }

    const closeForm = () => {
        setShowForm(false);
    }

    const handleSubmit =() => {
        
        closeForm();
    }

    const handleDelete = (id) => {
        if(window.confirm("Are you sure you want to delete this data?")) {
            console.log("Calling delete function")
            setHallId(id);
            
        }
    }

    const rows =halls.map((hall) => {
        return (
            <tr key={hall.hallId}>
                <td>{halls.indexOf(hall) + 1}</td>
                <td>{hall.hallName}</td>
                <td>{hall.address}</td>
                <td>{hall.totalCapacity}</td>
                <td>
                    <div className="btn-group gap-4" role="group">
                        <button type="button" className="btn btn-primary" style={{ borderRadius: "4px" }}>Edit</button>
                        <button type="button" className="btn btn-danger" style={{ borderRadius: "4px" }} onClick={() => {handleDelete(hall.hallId)}}>Delete</button>
                    </div>
                </td>
            </tr>
        );
    })
    return (
        <div>
            <h1>Hall List</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <td>Hall ID</td>
                        <td>Hall Name</td>
                        <td>Hall Address</td>
                        <td>Total Capacity</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
            <Button className="btn btn-primary" onClick={() => {openForm()}}>Add New Hall</Button>
            {showForm && (
                <div className="overlay">
                    <HallForm onClose={closeForm} onSubmit={handleSubmit} />
                </div>
            )}
        </div>
    );
}
