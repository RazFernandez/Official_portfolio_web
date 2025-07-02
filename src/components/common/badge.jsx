import stylesComponents from "../../styles/stylesComponents";

export default function Badge({value}) {
    return (
        <span className={stylesComponents.badges.green}>{value}</span>
    );
}