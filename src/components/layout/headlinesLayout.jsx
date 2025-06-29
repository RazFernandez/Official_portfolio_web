import stylesLayouts from "../../styles/stylesLayouts";

export default function HeadlineLayout({ children }) {
    return (
        <div className={stylesLayouts.headlines.headers}>
            {children}
        </div>
    );
}