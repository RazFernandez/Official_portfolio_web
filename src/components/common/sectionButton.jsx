import ArrowIcon from "../icons/arrowIcon";
import stylesComponents from "../../styles/stylesComponents";

export default function SectionButton() {
    return (
        <button className={stylesComponents.buttons.sectionIcon}>
            <ArrowIcon />
        </button>
    );
}