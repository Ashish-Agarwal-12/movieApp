import axios from 'axios';

class MoviesService {
  
    createMovie = (body) => {
        return axios.post("http://localhost:8080/addMovie");
    }

    getAllMovies = (pageNumber, pageSize) => {
        return axios.get(`http://localhost:8080/getAllMovies`);
    }

    getMovieById = (id) => {
        return axios.get(`http://localhost:8080/getMovieById/${id}`);
    }

    updateMovie = (body, id) => {
        return axios.put(`http://localhost:8080/updateMovie/${id}`, body);
    }

    searchMovieByName = (movieName) => {
        return axios.get(`http://localhost:8080/searchMovieByName?title=${movieName}`)
    }

    deleteMovie = (id) => {
        return axios.delete(`http://localhost:8080/deleteMovie/${id}`);
    }
}

export default new MoviesService();
