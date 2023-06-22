import React, { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import UserService from "../services/UserService";
import UserForm from "./UserForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const handleUpdate = (user) => {
    navigate("/userUpdate", { state: user });
  };

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this data?")) {
      UserService.deleteUser(id)
        .then((response) => console.log("Delete Successful"))
        .catch((error) => console.log(error));
    }
    toast.success("Deleted Successfully");
  };

  useEffect(() => {
    UserService.findAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }, [users]);

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
        <h1 className="py-4">User List</h1>
        <Button type="primary" onClick={() => setModalShow(true)}>
          Create New User
        </Button>
        <UserForm
          show={modalShow}
          onHide={() => setModalShow(false)}
          user={""}
        />
      </Container>

      <Table striped>
        <thead style={{ fontWeight: "bold" }}>
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
        <tbody>
          {users.map((user) => {
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
                        handleUpdate(user);
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
          })}
        </tbody>
      </Table>

      <ToastContainer />
    </Container>
  );
}
