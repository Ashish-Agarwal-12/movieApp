import React from "react";
import { Card } from "react-bootstrap";
import "../src/components/MovieCard.css";

export default function MovieCard({ movie }) {
    return (
        <Card className="movie-card">
            <Card.Img variant="top" src={movie.image} alt={movie.title} />
            <div className="card-overlay">
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
            </div>
        </Card>
    );
};
