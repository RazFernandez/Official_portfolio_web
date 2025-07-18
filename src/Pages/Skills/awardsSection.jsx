import HeadlineLayout from "../../components/layout/headlinesLayout";
import HeadLine from "../../components/common/headlines";
import { Grid4x3Layout } from "../../components/layout/grid3x3Layout";
import TechLogoButton from "../../components/common/techLogoButton";
import { awardsData } from "../../data/awardsData";
import convertURLGoogleDrive from "../../utils/convertDriveURL";
import SectionButton from "../../components/common/sectionButton";

export default function AwardsSection() {
    
    return (
        <section id="award-section" className="bg-dark-bg-700">
            <HeadlineLayout>
                <HeadLine>Certifications & Badges</HeadLine>
            </HeadlineLayout>
            <Grid4x3Layout>
                {awardsData.map((award) => {
                    return (<TechLogoButton key={award.name} logoUrl={convertURLGoogleDrive(award.imageUrl)} href={award.url} alt={award.name} />);
                                })}
            </Grid4x3Layout>
            <SectionButton sectionID="tech-toolbox-section" marginTopClass="pt-8"/>
        </section>
    );
}