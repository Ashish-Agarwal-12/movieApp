import axios from 'axios'

class HallService {
  
    addHall = (body) => {
        return axios.post("http://localhost:8080/addHall", body);
    }

    getAllHalls = (pageNumber, pageSize) => {
        return axios.get(`http://localhost:8080/getAllHalls?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    }

    deleteHall = (id) => {
        return axios.delete("http://localhost:8080/delete/"+`${id}`);
    }
}

export default new HallService();
