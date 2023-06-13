import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import {useNavigate} from "react-router-dom";

export const HallContext = React.createContext();

const getAllHalls = "http://localhost:8080/getAllHalls";
const addHallUrl = "http://localhost:8080/addHall";
const deleteHallUrl = "http://localhost:8080/deleteHall/";

export const HallContextProvider = ({ children }) => {
    const [hallChanged, setHallChanged] = useState(true);
    const [halls, setHalls] = useState([]);
    const [hall, setHall] = useState();
    const [hallId, setHallId] = useState();
    const navigate = useNavigate();

    const findAllHalls = async (url) => {
        await axios.get(url).then((response) => {
            console.log(response);
            setHalls(response.data);
            
        });
    }
    
    useEffect(() => {
        if (hallChanged) {

            findAllHalls(getAllHalls);
            
        }
    }, [hallChanged]);

    const createNewHall = async (url, body) => {
        await axios.post(url, body).then((response) => {
            console.log(response);
        });
    }
    useEffect(() => {
        if (hall) {
            createNewHall(addHallUrl, hall);
            setHallChanged(true);
            setHallChanged(false);
        }
    }, [hall]);

    const deleteHall = async (url, id) => {
        await axios.delete(url+`${id}`).then((response) => {
            
            console.log(response);
            navigate("/hallList");
        });
    }
    useEffect(() => {
        if (hallId) {
            deleteHall(deleteHallUrl, hallId);
            setHallChanged(true);
            setHallChanged(false);
        }
    }, [hallId]);

    return (
        <HallContext.Provider value={{ setHallChanged, halls, setHalls, setHall, setHallId }}>
            {children}
        </HallContext.Provider>
    );
}