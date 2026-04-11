import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Outlet } from "react-router";

export function Layout() {
    return (
        <section>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </section>
    )
}