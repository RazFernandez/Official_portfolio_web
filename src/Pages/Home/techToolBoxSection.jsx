import HeadlineLayout from "../../components/layout/headlinesLayout";
import HeadLine from "../../components/common/headlines";
import staticString from "../../strings/strings";
import TechLogoButton from "../../components/common/techLogoButton";
import { Grid4x3Layout } from "../../components/layout/grid3x3Layout";
import { TechToolBox } from "../../data/techToolBoxData";

export default function TechToolBoxSection() {

    return (
        <section className="bg-dark-bg-600">
            <HeadlineLayout>
                <HeadLine>{staticString.sectionNames.home[1]}</HeadLine>
            </HeadlineLayout>

            <Grid4x3Layout>
                {TechToolBox.map(tech => {
                    return (<TechLogoButton logoUrl={tech.iconUrl} href={tech.siteUrl} alt={tech.name} />);
                })}
               
            </Grid4x3Layout>
      </section>  
    );
}