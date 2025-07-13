import { useEffect, useState } from "react";
import ProfessionalProjects from "./profesionalProjectsSection";
import PersonalProjects from "./personalProjectsSection";
import ExperimentalProjects from "./experimentalProjectsSection";
import { getProjectData } from "../../api/fetchProjectData";
import { sortProjectByDate, filterProjectsByType } from "../../utils/dataOperations";

export default function Portfolio() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getProjectData();
            setProjectData(data);
        }

        fetchData();
    }, []);

    if (!projectData) {
        // You can also create a single skeleton component if you want
        return (
            <>
                <ProfessionalProjects isLoading />
                <PersonalProjects isLoading />
                <ExperimentalProjects isLoading />
            </>
        );
    }

    const professionalProjects = sortProjectByDate(
        filterProjectsByType(projectData, "Professional Experience"),
        "DES"
    );

    const personalProjects = sortProjectByDate(
        filterProjectsByType(projectData, "Personal Project"),
        "DES"
    );

    const experimentalProjects = sortProjectByDate(
        filterProjectsByType(projectData, "Experimental Project"),
        "DES"
    );

    return (
        <>
            <ProfessionalProjects data={professionalProjects} />
            <PersonalProjects data={personalProjects} />
            <ExperimentalProjects data={experimentalProjects} />
        </>
    );
  }