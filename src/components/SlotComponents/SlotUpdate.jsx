import { useState, useEffect } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SlotService from "../services/SlotService";

const SlotUpdate = () => {
  const location = useLocation();
  const slot = location.state;
  console.log(slot);
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    SlotService.getSlotById(slot.slotId)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  },[]);
  

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
    SlotService.updateSlot(data.slotId, data)
      .then((response) => {
        setData([]);
        toast.success("Updated Successsfully");
        navigate("/slotList");
      })
      .catch((error) => {
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  console.log(error);
  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
      
        <Form.Group className="mb-3">
          <Form.Label htmlFor="slotDate">Slot Date</Form.Label>
          <Form.Control
            type="date"
            name="slotDate"
            onChange={(e) => handleChange(e, "slotDate")}
            value={data.slotDate}
            isInvalid={error.errors?.response?.data?.slotDate ? true : false}
          />
          <Form.Text>{error.errors?.response?.data?.slotDate}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="duration">Duration</Form.Label>
          <Form.Control
            type="text"
            name="durarion"
            placeholder="Enter the Duration in hours and minutes"
            onChange={(e) => handleChange(e, "duration")}
            value={data.duration}
            isInvalid={error.errors?.response?.data?.duration ? true : false}
          />
          <Form.Text>{error.errors?.response?.data?.duration}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="capacity">Capacity</Form.Label>
          <Form.Control
            type="number"
            name="capacity"
            placeholder="Enter the Capacity"
            onChange={(e) => handleChange(e, "capacity")}
            value={data.capacity}
            isInvalid={error.errors?.response?.data?.capacity ? true : false}
          />
          <Form.Text>{error.errors?.response?.data?.capacity}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="amount">Amount</Form.Label>
          <Form.Control
            type="number"
            name="amount"
            placeholder="Enter the amount"
            onChange={(e) => handleChange(e, "amount")}
            value={data.amount}
            isInvalid={
              error.errors?.response?.data?.amount ? true : false
            }
          />
          <Form.Text>{error.errors?.response?.data?.amount}</Form.Text>
        </Form.Group>
        <Container>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default SlotUpdate;
