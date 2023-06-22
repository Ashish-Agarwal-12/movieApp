import React, { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import HallService from "../services/HallService";
import HallForm from "./HallForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function HallList() {
  const [halls, setHalls] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const handleDeleteHall = (id) => {
    if (window.confirm("Are you sure you want to delete this data?")) {
      HallService.deleteHall(id)
        .then(() => {
          toast.success("Deleted Successfully")})
        .catch((error) => console.log(error));
    }
    toast.success("Deleted Successfully ");
  };

  const handleUpdateHall = (hall) => {
    navigate("/updateHall", { state : hall})
  }
  useEffect(() => {
    HallService.getAllHalls()
      .then((response) => {
        setHalls(response.data);
      })
      .catch((error) => console.log(error));
  }, [halls]);

  return (
    <Container>
      <Container
        className="text-center md-4"
        style={{
          display: "inline-flex",
          flexWrap: "wrap",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <h1 className="py-4">Hall List</h1>
        <Button type="primary" onClick={() => setModalShow(true)}>
          Create New Hall
        </Button>
        <HallForm
          show={modalShow}
          onHide={() => setModalShow(false)}
          hall={""}
        />
      </Container>

      <Table striped className="text-center">
        <thead style={{ fontWeight: "bold" }}>
          <tr>
            <td>Hall ID</td>
            <td>Hall Name</td>
            <td>Address</td>
            <td>Total Capacity</td>
          </tr>
        </thead>
        <tbody>
          {halls.map((hall) => {
            return (
              <tr key={hall.hallId}>
                <td>{halls.indexOf(hall) + 1}</td>
                <td>{hall.hallName}</td>
                <td>{hall.address}</td>
                <td>{hall.totalCapacity}</td>
                <td>
                  <div className="btn-group gap-4" role="group">
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ borderRadius: "4px" }}
                      onClick={() => handleUpdateHall(hall)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{ borderRadius: "4px" }}
                      onClick={() => {
                        handleDeleteHall(hall.hallId);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Container></Container>
      <ToastContainer />
    </Container>
  );
}
