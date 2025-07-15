import ArrowIcon from "../icons/arrowIcon";
import ArrowButton from "./arrowButton";

export default function SectionButton({ sectionID }) {
    
    function goToSection() {
        const section = document.getElementById(sectionID);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="flex justify-center items-center lg:mt-[-4em] pb-6">
            <ArrowButton OnclickFunction={goToSection}/>
        </div >
    );
}