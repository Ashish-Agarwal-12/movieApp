import { Component } from 'react'
import axios from 'axios';

export default class HallService extends Component {
    findAllHalls() {
        return axios.get("http//localhost:8080/getAllHalls");
    }
    findHallById(id) {
        return axios.get("http//localhost:8080/getHallById" + "/" + id);
    }

    createHall(hall) {
        return axios.post("http//localhost:8080/addHall", hall);
    }

    updateMovie(hall, id) {
        return axios.put("http//localhost:8080/updateHall" + "/" + id, hall);
    }

    deleteMovie(id) {
        return axios.delete("http//localhost:8080/deleteHall" + "/" + id);
    }
}