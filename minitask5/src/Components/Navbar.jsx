import { NavLink } from "react-router";

function Nav(){
    return(
        <nav className="p-4 font-semibold">
            <ul className="flex gap-20 justify-center">
                <li><NavLink className={({isActive}) => isActive ? "bg-white rounded px-1" : " "}  to={"/"}>
                    Home
                </NavLink>
                    </li>
                <li><NavLink className={({isActive}) => isActive ? "bg-white rounded px-1" : " "} to={"/counter"}>
                    Counter
                </NavLink>
                    </li>
                <li><NavLink className={({isActive}) => isActive ? "bg-white rounded px-1" : " "} to={"/product"}>
                    Product
                </NavLink>
                    </li>
                <li><NavLink className={({isActive}) => isActive ? "bg-white rounded px-1" : " "} to={"/pokemon"}>
                    Pokemon
                </NavLink>
                    </li>
                <li><NavLink className={({isActive}) => isActive ? "bg-white rounded px-1" : " "} to={"/character"}>
                    Rick&Morty
                </NavLink>
                    </li>
                <li><NavLink className={({isActive}) => isActive ? "bg-white rounded px-1" : " "} to={"/rickmortytwo"}>
                    Custom Hook
                </NavLink>
                    </li>
            </ul>
        </nav>
    )
}

export default Nav;