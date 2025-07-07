import stylesComponents from "../../styles/stylesComponents";

export default function OutlinedButton({ children }) {
    return (
        <button href="#" className={stylesComponents.buttons.outlined}>{children}</button>
    );
}