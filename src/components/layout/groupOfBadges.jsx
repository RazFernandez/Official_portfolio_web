import TagBadge from "../common/tagBadge";
export default function GroupOfBadges({listOfTechnologies}) {

    const badgesComponets = []
    for (const tech of listOfTechnologies) {
        badgesComponets.push(<TagBadge key={tech} value={tech}></TagBadge>);
    }

    // Make List of elements a Map data structure instead

    return (
        <div className="flex flex-wrap gap-2 mb-6 mt-6">
            {badgesComponets}
            {/* {mapOfElements && mapOfElements.lenght > 0 ? (mapOfElements.map(element => (<TagBadge key={element.id} value={element.technology} color={"grey"}></TagBadge>))) : (<TagBadge value="Sample Tag" />)} */}
        </div>
    );
}