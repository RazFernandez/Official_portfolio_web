import styles from "../../styles";

export default function OutlinedButton({ children }) {
    return (
        <button href="#" className={styles.buttons.outlined}>{children}</button>
    );
}