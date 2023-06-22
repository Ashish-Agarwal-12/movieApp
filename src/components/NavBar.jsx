import { useEffect, useState } from "react";
import UserService from "./services/UserService";
import UserNavbar from "./UserNavbar";
import AdminNavbar from "./AdminNavbar";

const NavBar = () => {
    
    const [userRole, setUserRole] = useState("");

    useEffect(() => {
        UserService.getUserByEmailId(localStorage.getItem("userName"))
        .then((response) => {
            setUserRole(response.data.userType);
            console.log("testing")})
        .catch((error) => console.log(error));
    },[])

    const handleNavBar = () => {
        return (userRole === 'user')? <UserNavbar /> : <AdminNavbar />;
    }
    return (
        <div>
            {handleNavBar()}
        </div>
    );
}

export default NavBar;