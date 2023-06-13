import axios from "axios";

const DeleteHall = async (id) => {
    try {
        const response = await axios.delete("http://localhost:8080/deleteHall" + "/" + id);
        console.log('Data Deleted Successfully' + response);
    } catch (error) {
        console.log(error);
    }
} 

export default DeleteHall;