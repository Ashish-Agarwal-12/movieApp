import axios from 'axios';

class SlotService {
  
    getAllSlots = () => {
        return axios.get("http://localhost:8080/getAllSlots");
    }
}

export default new SlotService();
