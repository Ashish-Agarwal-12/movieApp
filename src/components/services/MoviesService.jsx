import axios from 'axios';

class MoviesService {
  
    createMovie = (body) => {
        return axios.post("http://localhost:8080/addMovie");
    }

    getAllMovies = (pageNumber, pageSize) => {
        return axios.get(`http://localhost:8080/getAllMovies?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    }

    getMovieById = (id) => {
        return axios.get(`http://localhost:8080/getMovieById/${id}`);
    }

    updateMovie = (body, id) => {
        return axios.put(`http://localhost:8080/updateMovie/${id}`, body);
    }

    searchMovieByName = (movieName) => {
        return axios.get(`http://localhost:8080/searchMovieByName`)
    }

}

export default new MoviesService();
