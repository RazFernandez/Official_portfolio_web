import stylesComponents from "../../styles/stylesComponents";

export default function OutlinedButton({ children, url = "#" }) {
    return (
        <a href={url} className={stylesComponents.buttons.outlined}>{children}</a>
    );
}