import HeadLine from "../../components/common/headlines";
import HeadlineLayout from "../../components/layout/headlinesLayout";
import staticString from "../../strings/strings";
import GroupOfCards from "../../components/layout/groupOfCards";
import Grid3x3Layout from "../../components/layout/grid3x3Layout";
import { finalTestData } from "../../data/cardData";
import { sortProjectByDate, filterProjectsByType } from "../../utils/dataOperations";

export default function PersonalProjects() {

    const profesionalProjects = sortProjectByDate(
        filterProjectsByType(finalTestData, "Personal Project"),
        "DES");

    return (
        <section>
            <HeadlineLayout>
                <HeadLine>{staticString.sectionNames.portfolio[1]}</HeadLine>
            </HeadlineLayout>
            <Grid3x3Layout>
                <GroupOfCards ArrayOfObjects={profesionalProjects} />
            </Grid3x3Layout>
        </section>
    );
}