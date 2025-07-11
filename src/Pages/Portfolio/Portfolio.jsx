import GroupOfCards from "../../components/layout/groupOfCards";
import Grid3x3Layout from "../../components/layout/grid3x3Layout";
import { finalTestData } from "../../data/cardData";
import { sortProjectByDate } from "../../utils/dataOperations";

export default function Portfolio() {
    const sortedASC = sortProjectByDate(finalTestData, "DES");    
    return (
        <Grid3x3Layout>
            <GroupOfCards ArrayOfObjects={sortedASC} />
            <GroupOfCards ArrayOfObjects={finalTestData} />
        </Grid3x3Layout>                    
    );
  }