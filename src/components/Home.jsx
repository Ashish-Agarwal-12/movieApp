import React, { useEffect, useState } from "react";
import "./Home.css";
import "./services/MoviesService";
import MoviesService from "./services/MoviesService";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    MoviesService.getAllMovies()
      .then((response) => {
        setMovies(response.data);
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (movie) => {
    navigate("/booking", { state: { movie } });
  };

  return (
    <>
      <div className="homepage">
        <h1>Movie Flix</h1>
        <div className="movie-card-container mt-5">
          {movies.map((movie) => {
            return (
              <Card
                className="movie-card"
                key={movie.movieId}
                onClick={(e) => handleClick(movie)}
              >
                <Card.Img
                  variant="top"
                  src={
                    "https://tse2.mm.bing.net/th/id/OIP.6_0gHOPMkL0euFrkjtZTswHaKa?w=196&h=276&c=7&r=0&o=5&pid=1.7"
                  }
                  alt={movie.title}
                />
                <div className="card-overlay">
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>{movie.description}</Card.Text>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
