import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Card } from "react-bootstrap";

export default function AddMovie() {
  const initialValues = {
    title: "",
    description: "",
    genre: "",
    duration: 0,
    imageUrl: "",
    releaseDate: "",
    slots: [
      {
        hall: {
          hallId: 0,
        },
        startTime: "",
        slotDate: "",
        duration: "",
        capacity: 0,
        amount: 0.0,
      }
    ],
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div style={{backgroundColor:"floralwhite", height:"93vh"}}>
      <div className="row">
        <div className="col mt-5" style={{verticalAlign:"middle"}}>
          <Card style={{border:"none"}}>
          <Card.Img src="https://cdn.dribbble.com/users/2851002/screenshots/6870633/harry_potter.gif"></Card.Img>
          </Card>
        </div>
        <div className="col">
          <div
            className="card ms-3 mt-3 me-5"
            style={{ border: "2px solid black", padding: "15px"}}
          >
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <Form>
                <h1 className="text-center">Enter the Movie Details</h1>
                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label" htmlFor="title">
                      Title
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      name="title"
                      id="title"
                    />
                  </div>

                  <div className="col">
                    <label className="form-label" htmlFor="genre">
                      Genre
                    </label>
                    <Field
                      type="text"
                      name="genre"
                      className="form-control"
                      id="genre"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label" htmlFor="description">
                      Description
                    </label>
                    <Field
                      type="text"
                      id="description"
                      className="form-control"
                      name="description"
                      
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label" htmlFor="imageUrl">
                      Image URL
                    </label>
                    <Field
                      type="text"
                      id="imageUrl"
                      className="form-control"
                      name="imageUrl"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label" htmlFor="bookingDate">
                      Duration
                    </label>
                    <Field
                      type="number"
                      id="duration"
                      className="form-control"
                      name="duration"
                    />
                  </div>
                  <div className="col">
                    <label className="form-label" htmlFor="releaseDate">
                      Release Date
                    </label>
                    <Field
                      type="date"
                      name="releaseDate"
                      className="form-control"
                      id="releaseDate"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label
                      className="form-label"
                      htmlFor="slots[0].hall.hallId"
                    >
                      Hall ID
                    </label>
                    <Field
                      type="number"
                      name="slots[0].hall.hallId"
                      id="slots[0].hall.hallId"
                      className="form-control"
                    />
                  </div>

                  <div className="col">
                    <label className="form-label" htmlFor="slots[0].startTime">
                      Start Time
                    </label>
                    <Field
                      type="text"
                      name="slots[0].startTime"
                      id="slots[0].startTime"
                      placeholder="HH:MM:SS"
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <label className="form-label" htmlFor="slots[0].slotDate">
                      Slot Date
                    </label>
                    <Field
                      type="date"
                      name="slots[0].slotDate"
                      id="slots[0].slotDate"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label className="form-label" htmlFor="slots[0].capacity">
                      Capacity
                    </label>
                    <Field
                      type="number"
                      name="slots[0].capcity"
                      id="slots[0].capacity"
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <label className="form-label" htmlFor="slots[0].amount">
                      Amount
                    </label>
                    <Field
                      type="number"
                      name="slots[0].amount"
                      id="slots[0].amount"
                      className="form-control"
                    />
                  </div>
                  <div className="col">
                    <label className="form-label" htmlFor="slots[0].slotDate">
                      Duration
                    </label>
                    <Field
                      type="text"
                      name="slots[0].duration"
                      id="slots[0].duration"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <Button
                    type="submit"
                    className="form-control"
                    variant="primary"
                    style={{ width: "300px" }}
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
