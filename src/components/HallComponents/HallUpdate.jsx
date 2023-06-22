import { useEffect, useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import HallService from "../services/HallService";

const HallUpdate = () => {
  const location = useLocation();
  const hall = location.state;

  const navigate = useNavigate();
  
  const [data, setData] = useState([]);

  useEffect(() => {
    HallService.getHallById(hall.hallId)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  },[]);
  console.log(data);

  const handleChange = (e, property) => {
    setData({ ...data, [property]: e.target.value });
    console.log(data);
  };

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    HallService.updateHallById(hall.hallId, data)
      .then(() => {
        setData({
          hallName: "",
          address: "",
          totalCapacity: "",
        });
        toast.success("Updated Successsfully");
        navigate("/hallList");
      })
      .catch((error) => {
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group>
          <Form.Label htmlFor="hallName">Hall Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the Hall Name"
            name="hallName"
            onChange={(e) => handleChange(e, "hallName")}
            isInvalid={error.errors?.response?.data?.hallName ? true : false}
          />
          <Form.Text style={{ color: "red" }}>
            {error.errors?.response?.data?.hallName}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="address">Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please Enter the Address of Hall"
            name="address"
            onChange={(e) => handleChange(e, "address")}
            isInvalid={error.errors?.response?.data?.address ? true : false}
          />
          <Form.Text style={{ color: "red" }}>
            {error.errors?.response?.data?.address}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="totalCapacity">Total Capacity</Form.Label>
          <Form.Control
            name="totalCapacity"
            type="number"
            placeholder="Enter the total Capacity"
            onChange={(e) => handleChange(e, "totalCapacity")}
            
            isInvalid={
              error.errors?.response?.data?.totalCapacity ? true : false
            }
          />
          <Form.Text style={{ color: "red" }}>
            {error.errors?.response?.data?.totalCapacity}
          </Form.Text>
        </Form.Group>
        <Container style={{ textAlign: "center" }} className="mb-3">
          <Button variant="primary" className="mt-4" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default HallUpdate;
