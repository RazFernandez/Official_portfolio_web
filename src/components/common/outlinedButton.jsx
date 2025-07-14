import stylesComponents from "../../styles/stylesComponents";
import { NavLink } from "react-router-dom";

/**
 * OutlinedButton is a reusable button component with an outlined style.
 * It supports both internal navigation (via <NavLink>) and external links.
 *
 * Props:
 * - children: Button label.
 * - url (string): The destination URL or path.
 * - external (boolean): Whether the link is external (default: false).
 */
export default function OutlinedButton({ children, url = "#", external = false }) {
    if (external) {
        return (
            <a href={url} className={stylesComponents.buttons.outlined} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    }

    return (
        <NavLink to={url} className={stylesComponents.buttons.outlined}>
            {children}
        </NavLink>
    );
}