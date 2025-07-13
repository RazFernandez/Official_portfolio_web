import HeadLine from "../../components/common/headlines";
import HeadlineLayout from "../../components/layout/headlinesLayout";
import staticString from "../../strings/strings";
import GroupOfCards from "../../components/layout/groupOfCards";
import Grid3x3Layout from "../../components/layout/grid3x3Layout";
import { sortProjectByDate, filterProjectsByType } from "../../utils/dataOperations";
import { useEffect, useState } from "react";
import { getProjectData } from "../../api/fetchProjectData";
import ProjectCardSkeleton from "../../components/common/projectCardSkeleton";

export default function ProfessionalProjects() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getProjectData()
            setProjectData(data)
        }

        fetchData();
        
    }, []);

    return (
        <section className="bg-dark-bg-700">
            <HeadlineLayout>
                <HeadLine>{staticString.sectionNames.portfolio[0]}</HeadLine>
            </HeadlineLayout>
            <Grid3x3Layout>
                {!projectData
                    ? Array.from({ length: 3 }).map((_, index) => (
                        <ProjectCardSkeleton key={index} />
                    ))
                    : <GroupOfCards ArrayOfObjects={sortProjectByDate(
                        filterProjectsByType(projectData, "Professional Experience"),
                        "DES")} />
                }
            </Grid3x3Layout>
        </section>
    );
}