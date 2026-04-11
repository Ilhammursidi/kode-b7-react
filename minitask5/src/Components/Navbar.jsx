import { useContext } from "react";
import { NavLink } from "react-router";
import LoginContext from "../context/authcontext/context";

function Nav() {
    const { user, logout, editProfile } = useContext(LoginContext)

    return (
        <nav className="p-4 font-semibold">
            <ul className="flex gap-20 justify-center items-center">
                <li><NavLink className={({ isActive }) => isActive ? "bg-white rounded px-1" : " "} to={"/"}>
                    Home
                </NavLink>
                </li>
                <li><NavLink className={({ isActive }) => isActive ? "bg-white rounded px-1" : " "} to={"/counter"}>
                    Counter
                </NavLink>
                </li>
                <li><NavLink className={({ isActive }) => isActive ? "bg-white rounded px-1" : " "} to={"/product"}>
                    Product
                </NavLink>
                </li>
                <li><NavLink className={({ isActive }) => isActive ? "bg-white rounded px-1" : " "} to={"/pokemon"}>
                    Pokemon
                </NavLink>
                </li>
                <li><NavLink className={({ isActive }) => isActive ? "bg-white rounded px-1" : " "} to={"/character"}>
                    Rick&Morty
                </NavLink>
                </li>
                <li><NavLink className={({ isActive }) => isActive ? "bg-white rounded px-1" : " "} to={"/rickmortytwo"}>
                    Custom Hook
                </NavLink>
                </li>
                <li>
                    {user ? (
                        <section className="flex items-center gap-2">
                            <p>{user.name}</p>
                            <img className="w-10 rounded-full" src={user?.photo || "https://i.pravatar.cc/150?img=62"} alt="" />
                            <select name="menu" id="menu" className="w-4">
                                <option value=""hidden></option>
                                <option value="Profile" onClick={editProfile}>
                                    Profile
                                    </option>
                                    
                                    
                        <option onClick={logout} className="flex justify-center bg-emerald-400 border p-1 rounded w-20">
                            Logout
                        </option>
                                
                        
                            </select>
                                </section>
                    ) : (
                        <NavLink className="border bg-emerald-400 p-2 rounded-md" to={"/login"}>
                            Login
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    )
}

export default Nav;