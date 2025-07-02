import HeroLogo from "../../assets/images/LogoPortfolioWeb.png"
import FilledButtonIcon from "./filledButtonIcon";
import RightArrow from "../icons/rightArrow";
import stylesComponents from "../../styles/stylesComponents";
import GroupOfBadges from "../layout/groupOfBadges";
import staticString from "../../strings/strings";


export default function ProjectCard({title, description, listOfTechnologies: mapOfTechnologies}) {
    
    return (
        <div className={stylesComponents.cards.background}>
            <a href="#">
                <img className="rounded-t-lg" src={HeroLogo} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className={stylesComponents.cards.title}>{title || staticString.fallbackText.title }</h5>
                </a>
                <p className={stylesComponents.cards.description}>{description || staticString.fallbackText.description}</p>
                <GroupOfBadges listOfElements={mapOfTechnologies}></GroupOfBadges>
                <FilledButtonIcon svgIcon={RightArrow}>View Project</FilledButtonIcon>
            </div>
        </div>
    );
}