import React, { useState } from "react";
import {  Button, Form } from "react-bootstrap";
import HallService from "../services/HallService";

const HallForm = ({ onClose }) => {

    const [hallName, setHallName] = useState("");
    const [address, setAddress] = useState("");
    const [totalCapacity, setTotalCapacity] = useState(0);

    const handleChange = (e) => {
        e.preventDefault();
        switch (e.target.name) {
            case "hallName":
              setHallName(e.target.value);
              break;
            case "address":
              setAddress(e.target.value);
              break;
            case "totalCapacity":
              setTotalCapacity(e.target.value);
              break;
          }
        
        // navigate("/");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newHall = {
          hallName: hallName,
          address: address,
          totalCapacity: totalCapacity,
        };
        console.log(JSON.stringify(newHall));
        HallService.addHall(newHall)
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error));
        window.location.reload(true);
      };

    return (
        <div className="modal-container">
            <div className="modal-content">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="forHallName">Hall Name</Form.Label>
                        <Form.Control type="text" name="hallName" onChange={handleChange} placeholder="Enter the Hall Name"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="address">Hall Address</Form.Label>
                        <Form.Control type="text" name="address" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="totalCapacity">Total Capacity</Form.Label>
                        <Form.Control type="text" name="totalCapacity" onChange={handleChange}/>
                    </Form.Group>
                    <button className="btn btn-primary" type="submit" style={{ borderRadius: '8px' }}>Submit</button>
                    <Button variant="secondary" onClick={onClose} style={{ borderRadius: '8px' }}>Cancel</Button>
                </Form>
            </div>
            <div className="overlay" onClick={onClose} />
        </div>
    );
}
export default HallForm;