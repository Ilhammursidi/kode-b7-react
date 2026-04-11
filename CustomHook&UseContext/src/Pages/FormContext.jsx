import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useContext,useState } from "react";
import LoginContext from "../context/authcontext/context";
import { useNavigate } from "react-router";

export function Login() {
    const navigate = useNavigate(); 
    const { login } = useContext(LoginContext);
    const [username, setUsername] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        login({ name : username })
        navigate("/")
    }

    return (
        <section>
            <section className="h-51">
                <form onSubmit={handleSubmit} className="justify-between focus-within: border-blue-600 border-2 rounded-2xl flex px-2 w-80 py-2 mt-70 mx-auto" action="">
                    <label htmlFor="username" className="text-white bg-blue-600 rounded-l-md p-1">Name :</label>
                    <input 
                    placeholder="enter your name"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    className="focus:border border-blue-600" 
                    type="text" />
                    <button className="rounded-r-md bg-blue-600 text-white p-1">Login</button>
                </form>
            </section>
        </section>
    )
}

