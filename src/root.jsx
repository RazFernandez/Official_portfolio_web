/* 
    Root component of the application.

    This component serves as the layout wrapper for all pages.
    It includes the persistent Navbar and Footer, which remain visible
    across different routes. The <Outlet /> renders the matched child route
    component based on the current URL, allowing dynamic page content
    while preserving the overall layout structure.
*/

import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

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