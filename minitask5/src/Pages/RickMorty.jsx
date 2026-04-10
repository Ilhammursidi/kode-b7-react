import { Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export function RickMorty() {
    return (
        <section>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </section>
    )
}