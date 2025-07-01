import HeroLogo from "../../assets/images/LogoPortfolioWeb.png"
import FilledButtonIcon from "./filledButtonIcon";
import RightArrow from "../icons/rightArrow";

export default function ProjectCard() {
    

    return (
        <div className="max-w-sm bg-secondary-900 border border-gray-700 rounded-lg shadow-sm">
            <a href="#">
                <img className="rounded-t-lg" src={HeroLogo} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-exo2 font-medium tracking-tight text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-lato font-normal text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                
                <FilledButtonIcon svgIcon={ RightArrow }>View Project</FilledButtonIcon>
            </div>
        </div>
    );
}