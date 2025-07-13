import ProjectCard from "../common/projectCard";

export default function GroupOfCards({ ArrayOfObjects }) {

    // Creates a card with the corresponding data to render them in
    // the portfolio

    const projectComponents = []
    for (const project of ArrayOfObjects) {
        projectComponents.push(<ProjectCard key={project.title} DataProject={project}/>)
    }

    return (
        <>
            {projectComponents}
        </>
    );
}