import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

export const HallContext = React.createContext();

const getAllHalls = "http://localhost:8080/getAllHalls";
const addHallUrl = "http://localhost:8080/addHall";

export const HallContextProvider = ({ children }) => {
    const [hallChanged, setHallChanged] = useState(true);
    const [halls, setHalls] = useState([]);
    const [hall, setHall] = useState();

    const findAllHalls = async (url) => {
        await axios.get(url).then((response) => {
            console.log(response);
            setHalls(response.data);
        });
    }
    
    useEffect(() => {
        if (hallChanged) {
            findAllHalls(getAllHalls);
            setHallChanged(false);
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
        }
    }, [hall]);

    return (
        <HallContext.Provider value={{ setHallChanged, halls, setHalls, setHall }}>
            {children}
        </HallContext.Provider>
    );
}