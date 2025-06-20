import HeroLogoPage from "./hero-logo";

export default function HereSection() {

    return (
        <section className="bg-dark-bg-700">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h2 className="max-w-2xl mb-6 font-exo2 font-light text-white lg:mb-8 md:text-lg lg:text-xl">Hi there! I'm Miguel Fernandez</h2>
                    <h1 className="max-w-2xl mb-4 text-4xl font-exo2 tracking-tight leading-none md:text-5xl xl:text-6xl text-primary-500">SOFTWARE ENGINEER</h1>
                    <p className="max-w-2xl mb-6 font-lato font-light text-white lg:mb-8 md:text-lg lg:text-xl">Keep it simple, make it possible. Focused on simplicity and innovation in Backend development. With a passion for learning the latest technologies, I'm exited to share my projects with you. Ready to explore?</p>
                </div>
            </div>
        </section>
    );
}

