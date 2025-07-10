import TagBadge from "../common/tagBadge";
export default function GroupOfBadges({mapOfElements}) {

    // const badgesComponets = []
    // for (const tech of jsTech) {
    //     badgesComponets.push(<Badge key={tech.id} value={tech.technology}></Badge>);
    // }

    // Make List of elements a Map data structure instead

    return (
        <div className="flex flex-wrap gap-2 mb-6 mt-6">
            {mapOfElements && mapOfElements.lenght > 0 ? (mapOfElements.map(element => (<TagBadge key={element.id} value={element.technology}></TagBadge>))) : (<TagBadge value="Sample Tag" />)}
        </div>
    );
}