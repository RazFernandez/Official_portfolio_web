import ArrowIcon from "../icons/arrowIcon";
import stylesComponents from "../../styles/stylesComponents";

export default function SectionButton({ sectionID }) {
    
    function goToSection() {
        const section = document.getElementById(sectionID);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="flex justify-center items-center lg:mt-[-4em] pb-6">
            <button className={stylesComponents.buttons.sectionIcon} onClick={goToSection}>
                <ArrowIcon />
            </button>
        </div >
    );
}