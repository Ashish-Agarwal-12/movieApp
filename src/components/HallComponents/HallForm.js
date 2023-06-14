import React, { useContext, useState } from "react";
import {  Button } from "react-bootstrap";
import { HallContext } from "../../context/HallContext";
// import {useNavigate} from "react-router-dom";

const HallForm = ({ onClose }) => {

    const { setHall } = useContext(HallContext);
    // const navigate = useNavigate();
    const [hallName, sethallName] = useState();
    const [address, setAddress] = useState();
    const [totalCapacity, setTotalCapacity] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        let body = {
            address: address,
            hallName: hallName,
            totalCapacity: totalCapacity
        }
        setHall(body);
        window.location.reload(true);
        // navigate("/");
    }

    return (
        <div className="modal-container">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="forHallName" className="form-label">Hall Name</label>
                        <input type="text" className="form-control" id="forHallName"  onChange={(e) => {sethallName(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="forHallAddress" className="form-label">Hall Address</label>
                        <input type="text" className="form-control" id="forHallAddress" onChange={(e) => {setAddress(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="forTotalCapacity">Capacity</label>
                        <input type="number" className="form-control" id="forTotalCapacity"  onChange={(e) => {setTotalCapacity(e.target.value)}}/>
                    </div>
                    <button className="btn btn-primary" type="submit" style={{ borderRadius: '8px' }}>Submit</button>
                    <Button variant="secondary" onClick={onClose} style={{ borderRadius: '8px' }}>Cancel</Button>
                </form>
            </div>
            <div className="overlay" onClick={onClose} />
        </div>
    );
}
export default HallForm;