import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Container,
  Pagination
} from "react-bootstrap";
import HallService from "../services/HallService";
import HallForm from "./HallForm";
import { toast } from "react-toastify";

export default function HallList() {
  const [halls, setHalls] = useState({
    content: [],
    totalPage: '',
    totalElements: '',
    pageSize: '',
    lastPage: false,
    pageNumber: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

//   useEffect(() => {
//     console.log("loading posts")
//     console.log(currentPage)
//     changePage(currentPage)

// }, [currentPage])

  

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleSubmit = () => {
    closeForm();
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this data?")) {
      HallService.deleteHall(id)
        .then(console.log("Delete Successful"))
        .catch((error) => console.log(error));
    }
    window.location.reload(true);
  };

  const rows = halls.content.map((hall) => {
    return (
      <tr key={hall.hallId}>
        <td>{halls.content.indexOf(hall) + 1}</td>
        <td>{hall.hallName}</td>
        <td>{hall.address}</td>
        <td>{hall.totalCapacity}</td>
        <td>
          <div className="btn-group gap-4" role="group">
            <button
              type="button"
              className="btn btn-primary"
              style={{ borderRadius: "4px" }}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              style={{ borderRadius: "4px" }}
              onClick={() => {
                handleDelete(hall.hallId);
              }}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  });

  useEffect(() => {
    let isActive = true;
    HallService.getAllHalls(0, 5)
      .then((response) => {
        if (isActive) {
          console.log(response);
          setHalls(response.data);
        }
      })
      .catch((error) => console.log(error));

    return () => {
      isActive = false;
    };
  }, []);

  const changePage = (pageNumber = 0, pageSize = 5) => {
    HallService.getAllHalls(pageNumber, pageSize)
    .then((response) => {setHalls(response.data)})
      .catch(error => {
        toast.error("Error while Fetching the data")
      })
    }
  
  return (
    <div >
      <h1>Hall List</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <td>User ID</td>
            <td>Hall Name</td>
            <td>address</td>
            <td>Total Capacity</td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <Button
        className="btn btn-primary"
        onClick={() => {
          // openForm();
        }}
      >
        Add New User
      </Button>
      {showForm && (
        <div className="overlay">
          <HallForm onClose={closeForm} onSubmit={handleSubmit} />
        </div>
      )}
      <Container className="mt-5">
        <Pagination>
          <Pagination.Prev disabled={halls.pageNumber === 0}/>
          {
            [...Array(halls.totalPage)].map((item, index) => (
              <Pagination.Item active={halls.pageNumber === index} key={index} onClick={() => {changePage(index)}}>
                {index + 1}
              </Pagination.Item>
            ))
          }
          <Pagination.Next onClick={() => (halls.pageNumber + 1)} disabled={halls.pageNumber === halls.lastPage}/>
        </Pagination>
      </Container>
      <div>
        <HallForm />
      </div>
    </div>
  );
}
