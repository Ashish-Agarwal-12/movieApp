import React, { useEffect, useState } from "react";
import MoviesService from "../services/MoviesService";
import { Button, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleChange = (movieName) => {
    MoviesService.searchMovieByName(movieName)
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    MoviesService.deleteMovie(id)
      .then((response) => {
        console.log(response);
        toast.success("Deleted Successfully");
      })
      .catch((error) => console.log(error));
  };

  const handleAddMovie = () => {
    navigate("/movieForm");
  }

  useEffect(() => {
    MoviesService.getAllMovies()
      .then((response) => {
        setMovies(response.data);
        console.log(movies);
      })
      .catch((error) => console.log(error));
  }, [movies]);

  return (
    <Container fluid className="App py-3 overflow-hidden" style={{backgroundColor:"lavenderblush"}}>
      <Row className="text-center">
        <Col>
          <h1>Movies List</h1>
        </Col>
        <Col>

        </Col>
        <Col>
          <Button variant="priamry" onClick={() => {handleAddMovie()}}>Add Movie</Button>
        </Col>
        <Col>
          <input
            type="text"
            placeholder="Search Movie"
            onChange={(e) => handleChange(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            justifyContent: "center",
          }}
        >
          {movies.map((movie) => {
            return (
              <>
                <div className="card mb-4" style={{ maxWidth: "540px", backgroundColor:"bisque" }}>
                  <div className="row g-0">
                    <div className="col-md-4" style={{ alignSelf: "center" }}>
                      <img
                        src="https://tse4.mm.bing.net/th/id/OIP.gfJlrSjGVwWqJxWZxTLJ2QHaK5?w=196&h=288&c=7&r=0&o=5&pid=1.7"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-4">
                      <div className="card-body">
                        <h5 className="card-title">
                          {" "}
                          {movies.indexOf(movie) + 1}. {movie.title}
                        </h5>
                        <br />
                        <h5>Genre: {movie.genre}</h5>
                        <p>Duration : {movie.duration} hours</p>
                        <strong>Release Date : {movie.releaseDate}</strong>
                        <br />
                        <strong>Description :</strong>
                        <p>{movie.description}</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card-body">
                        <h5 className="card-title">Running on</h5>
                        {movie.slots.map((slot) => {
                          return (
                            <div>
                              <p>
                                <strong>Slot Number:</strong> {slot.slotId}
                                <br />
                                <strong>Hall Name:</strong> {slot.hall.hallName}
                              </p>
                            </div>
                          );
                        })}
                        <div
                          style={{ display: "inline-flex" }}
                          className="mt-5"
                        >
                          <Button variant="primary">Update</Button>
                          <Button
                            variant="danger"
                            className="ms-1"
                            onClick={() => {
                              handleDelete(movie.movieId);
                            }}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </Row>
    </Container>
  );
}

export default MovieList;
