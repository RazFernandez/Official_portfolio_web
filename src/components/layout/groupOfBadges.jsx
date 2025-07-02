import Badge from "../common/badge";

export default function GroupOfBadges() {

    const techStack = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "TailwindCSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
        "TypeScript",
        "Next.js",
        "Redux",
        "Docker",
        "Git"
    ];

    const badgesComponets = []
    for (const tech of techStack) {
        badgesComponets.push(<Badge value={tech}></Badge>);
    }

    return (
        <div className="flex flex-wrap gap-2 mb-6 mt-6">
            {badgesComponets}
        </div>
    );
}