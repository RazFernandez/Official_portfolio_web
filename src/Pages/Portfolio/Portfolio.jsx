import GroupOfCards from "../../components/layout/groupOfCards";
import Grid3x3Layout from "../../components/layout/grid3x3Layout";
import { finalTestData } from "../../data/cardData";
import { sortProjectByDate, filterProjectsByType } from "../../utils/dataOperations";

export default function Portfolio() {
    const sortedASC = sortProjectByDate(finalTestData, "DES");    
    const filteredData = filterProjectsByType(finalTestData, "Personal Project");
    const filteredData2 = filterProjectsByType(finalTestData, "Professional Experience");
    return (
        <Grid3x3Layout>
            <GroupOfCards ArrayOfObjects={sortedASC} />
            <GroupOfCards ArrayOfObjects={finalTestData} />
            <GroupOfCards ArrayOfObjects={filteredData} />
            <GroupOfCards ArrayOfObjects={filteredData2} />
        </Grid3x3Layout>                    
    );
  }