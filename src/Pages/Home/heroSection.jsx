import HeroLogo from "../../assets/images/LogoPortfolioWeb.png"
import FilledButton from "../../components/common/filledButton";
import OutlinedButton from "../../components/common/outlinedButton";
import staticString from "../../strings/strings";
import SectionButton from "../../components/common/sectionButton";

export default function HeroSection() {

    return (
        <section id="hero-section" className="bg-dark-bg-700">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h2 className="max-w-2xl mb-6 font-exo2 font-light text-white lg:mb-8 md:text-xl lg:text-3xl">{staticString.sectionContent.home.greetings }</h2>
                    <h1 className="max-w-2xl mb-4 text-4xl font-exo2 tracking-tight leading-none md:text-5xl xl:text-6xl text-primary-500">{staticString.sectionContent.home.career}</h1>
                    <p className="max-w-2xl mb-6 font-lato font-light text-white lg:mb-8 md:text-lg lg:text-lg">{staticString.sectionContent.home.description}</p>
                    <FilledButton url="/about">{ staticString.sectionContent.home.buttonsLabel[0] }</FilledButton>
                    <OutlinedButton url="/portfolio">{ staticString.sectionContent.home.buttonsLabel[1] }</OutlinedButton>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={HeroLogo} width={500} alt="Laptop Logo" />
                </div>
            </div>
            <SectionButton sectionID="lastest-projects-section"/>
        </section>
    );
}

