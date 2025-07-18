import ProfileImage from "../../assets/images/Profile_Photo.png";
import staticString from "../../strings/strings";
import SectionButton from "../../components/common/sectionButton";

export default function BiographySection() {

    // Split the pure text content into paragraphs
    const biography = staticString.sectionContent.about.biography
    const paragraphs = biography.trim().split(/\n\s*\n/);
    const paragraphsStyle = "max-w-2xl mb-4 font-lato font-light text-white lg:mb-4 md:text-md lg:text-md whitespace-pre-line";

    return (
        <section id="biograpghy-section" className="bg-dark-bg-700">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-8 lg:py-16 lg:grid-cols-12">

                <div className="place-self-center lg:col-span-7 lg:order-last">
                    <h2 className="max-w-2xl mb-8 text-4xl font-exo2 tracking-tight leading-none md:text-5xl xl:text-4xl text-primary-500">
                        Passionate Software Developer 👨‍💻
                    </h2>
                    {paragraphs.map((item, index) => (
                        <p key={index} className={paragraphsStyle}>
                            {item}
                        </p>
                    ))}
                </div>

                <div className="pb-8 lg:mt-0 lg:col-span-5 lg:flex flex items-center justify-center">
                    <img src={ProfileImage} width={500} alt="Laptop Logo" />
                </div>
            </div>
        </section>
    );
}
