import HeadLine from "../../components/common/headlines";
import HeadlineLayout from "../../components/layout/headlinesLayout";
import staticString from "../../strings/strings";
import ProjectCard from "../../components/common/projectCard";
import Grid3x3Layout from "../../components/layout/grid3x3Layout";
import { DataPortfolio } from "../../data/cardData";
// import { pyTech, jsTech, devOpsTech, mobileTech, stylingTech } from "../../data/cardData";

// Group of card: Array of objects
// A specific card: Object itself

export default function LastestProjectsSection(){
    return (
        <section>
            <HeadlineLayout>
                <HeadLine>{ staticString.sectionNames.home[0] }</HeadLine>
            </HeadlineLayout>
            <Grid3x3Layout>
                <ProjectCard DataProject={DataPortfolio}/>
                {/* <ProjectCard listOfTechnologies={pyTech}></ProjectCard>
                <ProjectCard listOfTechnologies={jsTech}></ProjectCard>
                <ProjectCard listOfTechnologies={devOpsTech}></ProjectCard>
                <ProjectCard listOfTechnologies={mobileTech}></ProjectCard>
                <ProjectCard listOfTechnologies={stylingTech}></ProjectCard> */}
            </Grid3x3Layout>
        </section>  
    );
}