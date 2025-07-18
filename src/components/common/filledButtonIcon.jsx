import stylesComponents from "../../styles/stylesComponents";
import { NavLink } from "react-router-dom";

/**
 * FilledButtonIcon is a reusable button with an icon, supporting both
 * internal navigation via <NavLink> and external links via <a>.
 *
 * Props:
 * - children: Button text content.
 * - svgIcon: A React component representing the SVG icon (optional).
 * - url (string): The destination URL or path.
 * - external (boolean): Whether the link is external (default: false).
 */
export default function FilledButtonIcon({ children, svgIcon: SvgIcon, url = "#", external = false }) {
    const content = (
        <>
            {children}
            {SvgIcon && <SvgIcon />}
        </>
    );

    if (external) {
        return (
            <a href={url} className={stylesComponents.buttons.filledIcon} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    return (
        <NavLink to={url} className={stylesComponents.buttons.filledIcon}>
            {content}
        </NavLink>
    );
}