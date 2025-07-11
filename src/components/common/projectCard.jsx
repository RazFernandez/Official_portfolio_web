import HeroLogo from "../../assets/images/LogoPortfolioWeb.png"
import FilledButtonIcon from "./filledButtonIcon";
import RightArrow from "../icons/rightArrow";
import stylesComponents from "../../styles/stylesComponents";
import GroupOfBadges from "../layout/groupOfBadges";
import staticString from "../../strings/strings";
import StatusBadge from "./statusBadge";
import convertURLGoogleDrive from "../../utils/convertDriveURL";
import { formatUTCToMonthYear } from "../../utils/convertUTCDate";


export default function ProjectCard({DataProject}) {
    
    // Make a readable URL
    const ImageURL = convertURLGoogleDrive(DataProject.imageUrl);
    const Date = formatUTCToMonthYear(DataProject.date);

    return (
        <div className={stylesComponents.cards.background}>
            <StatusBadge isCompleted={DataProject.status} date={Date}/>
            <a href="#">
                <img className="w-full h-60 object-cover rounded-t-lg" src={ImageURL || HeroLogo} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className={stylesComponents.cards.title}>{DataProject.title || staticString.fallbackText.title }</h5>
                </a>
                <p className={stylesComponents.cards.description}>{DataProject.description || staticString.fallbackText.description}</p>
                <GroupOfBadges listOfTechnologies={DataProject.technologies.languagesAndFrameworks}></GroupOfBadges>
                <FilledButtonIcon svgIcon={RightArrow} url={DataProject.projectLink}>View Project</FilledButtonIcon>
            </div>
        </div>
    );
}