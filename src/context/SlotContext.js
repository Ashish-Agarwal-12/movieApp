import axios from "axios";
import { useEffect, useState } from "react";

export const SlotContext = React.createContext();

const getAllSlotsUrl = "http://localhost:8080/getAllSlots";
const deleteSlotUrl = "http://localhost:8080/deleteSlot/";

export const SlotContextProvider = ({ children }) => {
    const [slotChanged, setSlotChanged] = useState(true);
    const [slots, setSlots] = useState([]);
    const [slotId, setSlotId] = useState();

    // Retrieving every slots
    const findAllSlots = async (url) => {
        await axios.get(url).then((response) => {
            console.log("Fetching All Slots Present");
            console.log(response);
            setSlots(response.data);
        });
    }
    useEffect(() => {
        if (slotChanged) {
            findAllSlots(getAllSlotsUrl);
        }
    }, [slotChanged]
    );

    // Deleting a slot by Id
    const deleteSlot = async (url, id) => {
        await axios.delete(url + `${id}`).then((response) => {
            console.log(response);
        });
    }

    useEffect(() => {
        if(slotId) {
            console.log("Deleting slot with id = " + slotId);
            deleteSlot(deleteSlotUrl, slotId);
        }
    }, [slotId]);

    return(
        <SlotContext.Provider value={{setSlotChanged, slots, setSlots, setSlotId}}>
            {children}
        </SlotContext.Provider>
    );
}
