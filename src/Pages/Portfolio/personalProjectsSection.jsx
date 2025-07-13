import HeadLine from "../../components/common/headlines";
import HeadlineLayout from "../../components/layout/headlinesLayout";
import staticString from "../../strings/strings";
import GroupOfCards from "../../components/layout/groupOfCards";
import Grid3x3Layout from "../../components/layout/grid3x3Layout";
import ProjectCardSkeleton from "../../components/common/projectCardSkeleton";

export default function PersonalProjects({ data, isLoading = false }) {

    return (
        <section>
            <HeadlineLayout>
                <HeadLine>{staticString.sectionNames.portfolio[1]}</HeadLine>
            </HeadlineLayout>
            <Grid3x3Layout>
                {isLoading
                    ? Array.from({ length: 3 }).map((_, index) => (
                        <ProjectCardSkeleton key={index} />
                    ))
                    : <GroupOfCards ArrayOfObjects={data} />
                }
            </Grid3x3Layout>
        </section>
    );
}