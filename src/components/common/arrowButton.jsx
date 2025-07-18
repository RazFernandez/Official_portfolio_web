import ArrowIcon from "../icons/arrowIcon";
import stylesComponents from "../../styles/stylesComponents";

export default function ArrowButton({OnclickFunction, direction="DOWN"}){
    return (
        <button className={stylesComponents.buttons.sectionIcon} onClick={OnclickFunction}>
            <ArrowIcon direction={ direction } />
        </button>
    );
}