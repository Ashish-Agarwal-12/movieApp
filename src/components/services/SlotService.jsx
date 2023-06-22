import axios from 'axios';

class SlotService {
  
    getAllSlots = () => {
        return axios.get("http://localhost:8080/getAllSlots");
    }

    deleteSlot = (id) => {
        return axios.delete(`http://localhost:8080/deleteSlot/${id}`);
    }

    updateSlot = (id, body) => {
        return axios.put(`http://localhost:8080/updateSlots/${id}`, body);
    }

    getSlotById = (id) => {
        return axios.get(`http://localhost:8080/getSlotById/${id}`);
    }
}

export default new SlotService();
