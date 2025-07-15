import HeadLine from "../../components/common/headlines";
import HeadlineLayout from "../../components/layout/headlinesLayout";
import staticString from "../../strings/strings";
import Grid3x3Layout from "../../components/layout/grid3x3Layout";
import GroupOfCards from "../../components/layout/groupOfCards";
import ProjectCardSkeleton from "../../components/common/projectCardSkeleton";
import FilledButton from "../../components/common/filledButton";
import SectionButton from "../../components/common/sectionButton";

export default function LastestProjectsSection({ data, isLoading = false }){
    return (
        <section id="lastest-projects-section" className="bg-dark-bg-800">
            <HeadlineLayout>
                <HeadLine>{ staticString.sectionNames.home[0] }</HeadLine>
            </HeadlineLayout>
            <Grid3x3Layout>
                {isLoading
                    ? Array.from({ length: 3 }).map((_, index) => (
                        <ProjectCardSkeleton key={index} />
                    ))
                    : <GroupOfCards ArrayOfObjects={data} />
                }
            </Grid3x3Layout>
            {!isLoading && (
                <div className="flex justify-center mt-8 pb-16 lg:pb-24">
                    <FilledButton url="/portfolio">View all projects</FilledButton>
                </div>
            )}
            <SectionButton sectionID="tech-toolbox-section"/>
        </section>  
    );
}