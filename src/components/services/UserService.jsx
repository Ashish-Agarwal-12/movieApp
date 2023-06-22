import axios from 'axios'

class UserService{
    findAllUsers = async () => {
        return axios.get("http://localhost:8080/getAllUsers");
    }

    fetchUserById = async (id) => {
        return axios.get(`http://localhost:8080/getUserById/${id}`);
    }

    createUser = async (body) => {
        return axios.post("http://localhost:8080/createUser", body);
    }

    deleteUser = async (id) => {
        return axios.delete(`http://localhost:8080/deleteUserById/${id}`);
    }

    updateUserById = async (id, body) => {
        return axios.put(`http://localhost:8080/updateUserById/${id}`, body);
    }

    getUserByEmailId = (emailId) => {
        return axios.get(`http://localhost:8080/getUserByEmail/${emailId}`);
    }
}

export default new UserService();
