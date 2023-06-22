import axios from 'axios'

class HallService {
  
    addHall = (body) => {
        return axios.post("http://localhost:8080/addHall", body);
    }

    getHallById = (id) => {
        return axios.get(`http://localhost:8080/getHallById/${id}`);
    }

    getAllHalls = () => {
        return axios.get("http://localhost:8080/getAllHalls");
    }

    deleteHall = (id) => {
        return axios.delete("http://localhost:8080/deleteHall/"+`${id}`);
    }

    updateHallById = (id, body) => {
        return axios.put(`http://localhost:8080/updateHall/${id}`, body);
    }

 }

export default new HallService();
