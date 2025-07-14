import HeadlineLayout from "../../components/layout/headlinesLayout";
import HeadLine from "../../components/common/headlines";
import staticString from "../../strings/strings";
import TechLogoButton from "../../components/common/techLogoButton";

export default function TechToolBoxSection() {
    return (
        <section className="bg-dark-bg-600">
            <HeadlineLayout>
                <HeadLine>{staticString.sectionNames.home[1]}</HeadLine>
            </HeadlineLayout>
            <TechLogoButton logoUrl={"https://img.icons8.com/color/96/000000/html-5.png"} />
            <TechLogoButton logoUrl={"https://img.icons8.com/color/96/000000/html-5.png"} />
            <TechLogoButton logoUrl={"https://img.icons8.com/color/96/000000/html-5.png"} />
            <TechLogoButton logoUrl={"https://img.icons8.com/color/96/000000/html-5.png"} />
      </section>  
    );
}