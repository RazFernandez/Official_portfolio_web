import stylesComponents from "../../styles/stylesComponents";
import { NavLink } from "react-router-dom";

/**
 * FilledButton is a reusable button component that renders either a 
 * React Router <NavLink> for internal navigation or an <a> tag for external links.
 *
 * Props:
 * - children: The content inside the button.
 * - url (string): The destination URL or path. Defaults to "#".
 * - external (boolean): If true, renders an anchor tag for external links.
 *   If false, uses <NavLink> for client-side routing.
 */

export default function FilledButton({ children, url = "#", external = false }) {
    if (external) {
        return (
            <a href={url} className={stylesComponents.buttons.filled} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }

    return (
        <NavLink to={url} className={stylesComponents.buttons.filled}>
            {children}
        </NavLink>
    );
}