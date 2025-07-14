import HeadLine from "../../components/common/headlines";
import HeadlineLayout from "../../components/layout/headlinesLayout";
import staticString from "../../strings/strings";
import Grid3x3Layout from "../../components/layout/grid3x3Layout";
import GroupOfCards from "../../components/layout/groupOfCards";
import ProjectCardSkeleton from "../../components/common/projectCardSkeleton";
import FilledButton from "../../components/common/filledButton";

export default function LastestProjectsSection({ data, isLoading = false }){
    return (
        <section>
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
                <div className="flex justify-center mt-8">
                    <FilledButton url="/portfolio">View all projects</FilledButton>
                </div>
            )}
        </section>  
    );
}