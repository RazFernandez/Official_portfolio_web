import ProfileImage from "../../assets/images/Profile_Photo.png";
import staticString from "../../strings/strings";

export default function BiographySection() {
    return (
        <section id="biograpghy-section" className="bg-dark-bg-700">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-8 lg:py-16 lg:grid-cols-12">

                <div className="place-self-center lg:col-span-7 lg:order-last">
                    <h2 className="max-w-2xl mb-4 text-4xl font-exo2 tracking-tight leading-none md:text-5xl xl:text-4xl text-primary-500">
                        Hello there, Nice to meet you! 👋
                    </h2>
                    <p className="max-w-2xl mb-6 font-lato font-light text-white lg:mb-8 md:text-md lg:text-md whitespace-pre-line">
                        {staticString.sectionContent.about.biography}
                    </p>
                </div>

                <div className="pb-8 lg:mt-0 lg:col-span-5 lg:flex flex items-center justify-center">
                    <img src={ProfileImage} width={500} alt="Laptop Logo" />
                </div>

            </div>
        </section>
    );
}
