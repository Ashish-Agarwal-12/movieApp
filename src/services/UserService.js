import axios from 'axios'
import React from 'react'

class UserService{
    findAllUsers = () => {
        return axios.get("http://localhost:8080/getAllUsers");
    }

    createUser(body) {
        return axios.post("http://localhost:8080/createUser", body);
    }

    deleteUser(id) {
        return axios.delete("http://localhost:8080/deleteUserById/"+`${id}`);
    }

    updateUserById(id, body) {
        return axios.put("http://localhost:8080/updateUserById/"+`${id}`, body);
    }
}

export default new UserService();
