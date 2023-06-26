import { useEffect, useState } from "react";
import UserService from "./services/UserService";
import UserNavbar from "./UserNavbar";
import AdminNavbar from "./AdminNavbar";

const NavBar = () => {
    
    const [userRole, setUserRole] = useState("");

    useEffect(() => {
        UserService.getUserByEmailId(localStorage.getItem("email"))
        .then((response) => {
            setUserRole(response.data.userType);
        })
        .catch((error) => console.log(error));
    },[])

    const handleNavBar = () => {
        return (userRole === 'admin')? <AdminNavbar /> : <UserNavbar />;
    }
    return (
        <div>
            {handleNavBar()}
        </div>
    );
}

export default NavBar;