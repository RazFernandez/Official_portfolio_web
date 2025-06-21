import styles from "../../styles";

export default function FilledButton({ children }) {
    return (
        <button href="#" className={styles.buttons.filled}>{children}</button>
    );
}