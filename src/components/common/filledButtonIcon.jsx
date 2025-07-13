import stylesComponents from "../../styles/stylesComponents";

export default function FilledButtonIcon({ children, svgIcon: SvgIcon, url }) {
    return (
        <a href={url} target="_blank" className={stylesComponents.buttons.filledIcon}>
            {children}
            {SvgIcon && <SvgIcon/>}
        </a>
    );
}