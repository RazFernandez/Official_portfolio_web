import stylesComponents from "../../styles/stylesComponents";

export default function FilledButtonIcon({ children, svgIcon: SvgIcon }) {
    return (
        <button href="#" className={stylesComponents.buttons.filledIcon}>
            {children}
            {SvgIcon && <SvgIcon/>}
        </button>
    );
}