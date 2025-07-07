/* 
    This page is the root of the app, that is,
    here the content is rendered according to a
    specific URL path, while keeping navbar and footer
    in the same place in all of them.
*/
import { Outlet } from "react-router";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

export default function Root() {
    return (
        <>
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
}