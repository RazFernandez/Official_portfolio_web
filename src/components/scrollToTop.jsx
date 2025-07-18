import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop scrolls to the top of the page when the route path changes.
 */
export default function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [location.pathname]);

    return null; // This component does not render anything
}