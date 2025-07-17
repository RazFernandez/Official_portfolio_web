import HeadLine from "../../components/common/headlines";
import HeadlineLayout from "../../components/layout/headlinesLayout";
import staticString from "../../strings/strings";
import GroupOfCards from "../../components/layout/groupOfCards";
import Grid3x3Layout from "../../components/layout/grid3x3Layout";
import ProjectCardSkeleton from "../../components/common/projectCardSkeleton";
import SectionButton from "../../components/common/sectionButton";

export default function ProfessionalProjects({ data, isLoading = false }) {

    return (
        <section id="professional-section" className="bg-dark-bg-700">
            <HeadlineLayout>
                <HeadLine>{staticString.sectionNames.portfolio[0]}</HeadLine>
            </HeadlineLayout>
            <Grid3x3Layout>
                {isLoading
                    ? Array.from({ length: 3 }).map((_, index) => (
                        <ProjectCardSkeleton key={index} />
                    ))
                    : <GroupOfCards ArrayOfObjects={data} />
                }
            </Grid3x3Layout>
            <SectionButton sectionID="personal-section" marginTopClass="lg:mt-4" />
        </section>
    );
}