import TagBadge from "../common/tagBadge";
export default function GroupOfBadges({listOfTechnologies, color}) {

    const badgesComponets = []
    for (const tech of listOfTechnologies) {
        badgesComponets.push(<TagBadge key={tech} value={tech} color={color}></TagBadge>);
    }

    // Make List of elements a Map data structure instead

    return (
        <div className="flex flex-wrap gap-2 mb-6 mt-6">
            {badgesComponets}
        </div>
    );
}