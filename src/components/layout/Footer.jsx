/* 
    This component creates the footer section
    of my portfolio web. It contains sections to
    other pages, my social media and a copyright 
    section 
*/

import { NavLink } from "react-router-dom";
import { GithubIcon, LinkedInIcon, MediumIcon } from "../icons/Icons-svg";

export default function Footer() {

    const styleFooterSections = "hover:underline hover:text-primary-500 transition duration-300 ease-in-out";
    return (
        <footer className="bg-dark-bg-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 font-lato text-white text-sm">
                <div className="flex flex-col items-center justify-between gap-y-6">
                    <div className="">
                        <ul className="flex flex-wrap items-center gap-x-4 md:gap-x-6">
                            <li>
                                <NavLink to={"/"} className={styleFooterSections}>HOME</NavLink>
                            </li>
                            <li className="text-white hidden md:inline">|</li>
                            <li>
                                <NavLink to={"/about"} className={styleFooterSections}>ABOUT ME</NavLink>
                            </li>
                            <li className="text-white hidden md:inline">|</li>
                            <li>
                                <NavLink to={"/portfolio"} className={styleFooterSections}>PORTFOLIO</NavLink>
                            </li>
                            <li className="text-white hidden md:inline">|</li>
                            <li>
                                <NavLink to={"/skills"} className={styleFooterSections}>SKILLS</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center gap-x-4 md:gap-x-8">
                            <li>
                                <a href="https://github.com/RazFernandez" target="_blank">
                                    <GithubIcon isHover={true}></GithubIcon>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/mrfernández/" target="_blank">
                                    <LinkedInIcon isHover={true}></LinkedInIcon>
                                </a>
                            </li>
                            <li>
                                <a href="https://medium.com/@RazielFernandez" target="_blank">
                                    <MediumIcon isHover={true}></MediumIcon>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>@2025 All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}