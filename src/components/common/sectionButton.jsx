
import ArrowButton from "./arrowButton";

export default function SectionButton({ sectionID, marginTopClass = "lg:mt-[-4em]" }) {

    function goToSection() {
        const section = document.getElementById(sectionID);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className={`flex justify-center items-center pb-6 ${marginTopClass}`}>
            <ArrowButton OnclickFunction={goToSection} />
        </div>
    );
}