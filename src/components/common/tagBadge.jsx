import stylesComponents from "../../styles/stylesComponents";

export default function TagBadge({value}) {
    return (
        <span className={stylesComponents.badges.tagBadge}>{value}</span>
    );
}