import React, { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserService from "../services/UserService";
import UserForm from "./UserForm";
import UserUpdate from "./UserUpdate";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// import ToastContainer, { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const handleSubmit = () => {
    closeForm();
  };

  const handleUpdate = (id, body) => {
    <UserUpdate id={id} body={body}/>
  }

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this data?")) {
      UserService.deleteUser(id)
        .then((response) => console.log("Delete Successful"))
        .catch((error) => console.log(error));
    }
    toast.success("Deleted Successfully");
  };

  const rows = users.map((user) => {
    return (
      <tr key={user.userId}>
        <td>{users.indexOf(user) + 1}</td>
        <td>{user.userName}</td>
        <td>{user.password}</td>
        <td>{user.emailId}</td>
        <td>{user.mobileNumber}</td>
        <td>{user.userType}</td>
        <td>
          <div className="btn-group gap-4" role="group"> 
            <button
              type="button"
              className="btn btn-primary"
              style={{ borderRadius: "4px" }}
              onClick={() => {
                <Link to="/userUpdate" />
                handleUpdate(user.userId,user);
              }}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              style={{ borderRadius: "4px" }}
              onClick={() => {
                handleDeleteUser(user.userId);
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
    UserService.findAllUsers()
      .then((response) => {
        if (isActive) {
          setUsers(response.data);
        }
      })
      .catch((error) => console.log(error));

    return () => {
      isActive = false;
    };
  }, [users]);

  

  return (
    <Container>
      <h1 className="py-4">User List</h1>
      
      <Table striped>
        <thead style={{fontWeight:"bold"}}>
          <tr>
            <td>User ID</td>
            <td>User Name</td>
            <td>Password</td>
            <td>Email Id</td>
            <td>Mobile Number</td>
            <td>User Type</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <Button
        className="btn btn-primary"
        onClick={() => {
          openForm();
        }}
      >
        Add New User
      </Button>
      {showForm && (
        <div className="overlay">
          <UserForm onClose={closeForm} onSubmit={handleSubmit} />
        </div>
      )}
      <ToastContainer />
    </Container>

  );
}
