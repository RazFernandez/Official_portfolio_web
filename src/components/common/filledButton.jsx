import stylesComponents from "../../styles/stylesComponents";

export default function FilledButton({ children }) {
    return (
        <button href="#" className={stylesComponents.buttons.filled}>{children}</button>
    );
}