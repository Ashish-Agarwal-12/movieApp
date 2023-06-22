import axios from 'axios'

class BookingService {
    
    getAllBookings = () => {
        return axios.get("http://localhost:8080/getAllBookings");
    }

    addBooking = (body) => {
        return axios.post("http://localhost:8080/addBooking", body);
    }

    cancelBooking = (id) => {
        return axios.put(`http://localhost:8080/cancelBooking/${id}`);
    }

    updateBooking = (id, body) => {
        return axios.put(`http://localhost:8080/updateBooking/${id}`, body);
    }
}

export default new BookingService();
