import HeadLine from "../../components/common/headlines";
import HeadlineLayout from "../../components/layout/headlinesLayout";
import staticString from "../../strings/strings";
import Grid3x3Layout from "../../components/layout/grid3x3Layout";
import GroupOfCards from "../../components/layout/groupOfCards";
import { finalTestData } from "../../data/cardData";

export default function LastestProjectsSection(){
    return (
        <section>
            <HeadlineLayout>
                <HeadLine>{ staticString.sectionNames.home[0] }</HeadLine>
            </HeadlineLayout>
            <Grid3x3Layout>
                <GroupOfCards ArrayOfObjects={finalTestData}/>
            </Grid3x3Layout>
        </section>  
    );
}