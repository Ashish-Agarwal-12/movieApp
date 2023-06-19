import React, { useEffect, useState } from "react";
import MoviesService from "../services/MoviesService";
import { Button, Card, Container, ListGroup, Row } from "react-bootstrap";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MoviesService.getAllMovies(0, 5)
      .then((response) => {
        setMovies(response.data);
        console.log(movies);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container fluid className="App py-3 overflow-hidden">
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
                <div class="card mb-4" style={{maxWidth: "540px"}}>
                  <div class="row g-0">
                    <div class="col-md-4" style={{alignSelf: "center"}}>
                      <img
                        src="https://tse4.mm.bing.net/th/id/OIP.gfJlrSjGVwWqJxWZxTLJ2QHaK5?w=196&h=288&c=7&r=0&o=5&pid=1.7"
                        class="img-fluid rounded-start"
                        alt="..."
                         
                      />
                    </div>
                    <div class="col-md-4">
                      <div class="card-body">
                        <h5 class="card-title">
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

                    <div class="col-md-4">
                      <div class="card-body">
                        <h5 class="card-title">Running on</h5>
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
