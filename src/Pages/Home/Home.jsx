import HeroSection from "./heroSection";
import LastestProjectsSection from "./lastestProjectsSection";
import TechToolBoxSection from "./techToolBoxSection";
import { useState, useEffect } from "react";
import { getProjectData } from "../../api/fetchProjectData";
import { sortProjectByDate, filterProjectsByType } from "../../utils/dataOperations";

/* 
    The home page includes three sections
*/

export default function Home() {

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getProjectData();
            setProjectData(data);
        }

        fetchData();
    }, []);

    if (!projectData) {
        return (
            <>
                <HeroSection></HeroSection>
                <LastestProjectsSection isLoading />
                <TechToolBoxSection></TechToolBoxSection>
            </>
        );
    }

    const professionalProjects = sortProjectByDate(
        filterProjectsByType(projectData, "Professional Experience"),
        "DES"
    );

    return (
        <>
            <HeroSection></HeroSection>
            <LastestProjectsSection data={professionalProjects.slice(0, 3)}></LastestProjectsSection>
            <TechToolBoxSection></TechToolBoxSection>
        </>
    );
}