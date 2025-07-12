import GroupOfCards from "../../components/layout/groupOfCards";
import Grid3x3Layout from "../../components/layout/grid3x3Layout";
import ProfessionalProjects from "./profesionalProjectsSection";
import PersonalProjects from "./personalProjectsSection";
import ExperimentalProjects from "./experimentalProjectsSection";

export default function Portfolio() {

    return (
        <>
            <ProfessionalProjects />
            <PersonalProjects />
            <ExperimentalProjects />
        </>
                
    );
  }