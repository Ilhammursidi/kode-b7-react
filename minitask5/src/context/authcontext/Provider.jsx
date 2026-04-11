import { useState } from "react";
import LoginContext from "./context";
import { useNavigate } from "react-router";

function LoginProvider({children}) {
    const navigate = useNavigate();
    const[user,setUser] = useState("")
    const login = (userData) => {
        setUser(userData);
    }

    const logout = () => {
        setUser("")
        navigate("/")
    }
    const editProfile = () => {
        navigate("/edit-profile")
    }

    return (
        <LoginContext.Provider value={{user,login,logout,editProfile}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider