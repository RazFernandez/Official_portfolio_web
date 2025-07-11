import stylesComponents from "../../styles/stylesComponents";

export default function TagBadge({ value, color }) {
    let colorStyle;

    switch (color) {
        case "grey":
            colorStyle = stylesComponents.badges.tagBadge.grey;
            break;
        case "green":
            colorStyle = stylesComponents.badges.tagBadge.green;
            break;
        case "red":
            colorStyle = stylesComponents.badges.tagBadge.red;
            break;
        case "blue":
            colorStyle = stylesComponents.badges.tagBadge.blue;
            break;
        case "yellow":
            colorStyle = stylesComponents.badges.tagBadge.yellow;
            break;
        default:
            colorStyle = stylesComponents.badges.tagBadge.green;
    }
    
    return (
        <span className={colorStyle}>{value}</span>
    );
}