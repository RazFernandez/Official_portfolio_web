import HeroLogo from "../../assets/images/LogoPortfolioWeb.png"
import FilledButtonIcon from "./filledButtonIcon";
import RightArrow from "../icons/rightArrow";
import stylesComponents from "../../styles/stylesComponents";
import GroupOfBadges from "../layout/groupOfBadges";


export default function ProjectCard() {
    

    return (
        <div className={stylesComponents.cards.background}>
            <a href="#">
                <img className="rounded-t-lg" src={HeroLogo} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className={stylesComponents.cards.title}>Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className={stylesComponents.cards.description}>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <GroupOfBadges></GroupOfBadges>
                <FilledButtonIcon svgIcon={RightArrow}>View Project</FilledButtonIcon>
            </div>
        </div>
    );
}