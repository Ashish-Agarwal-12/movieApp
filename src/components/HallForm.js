import React, { useContext, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import { HallContext } from "../context/HallContext";

const HallForm = ({ onClose, onSubmit }) => {

    const { setHall } = useContext(HallContext);
    const addressRef = useRef();
    const hallNameRef = useRef();
    const capacityRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        
        onSubmit();
    }

    return (
        <div className="modal-container">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="forHallName" className="form-label">Hall Name</label>
                        <input type="text" className="form-control" id="forHallName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="forHallAddress" className="form-label">Hall Address</label>
                        <input type="text" className="form-control" id="forHallAddress" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="forTotalCapacity">Capacity</label>
                        <input type="number" className="form-control" id="forTotalCapacity" />

                    </div>
                    <Button variant="primary" type="submit" style={{ borderRadius: '8px' }} onClick={() => {
                        setHall({
                            address: addressRef.current.value,
                            hallName: hallNameRef.current.value,
                            totalCapacity: capacityRef.current.value
                        })
                    }}>Submit</Button>
                    <Button variant="secondary" onClick={onClose} style={{ borderRadius: '8px' }}>Cancel</Button>
                </form>
            </div>
            <div className="overlay" onClick={onClose} />
        </div>
    );
}

export default HallForm;