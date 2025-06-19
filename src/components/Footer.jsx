/* 
    This component creates the footer section
    of my portfolio web. It contains sections to
    other pages, my social media and a copyright 
    section 
*/

import { GithubIcon, LinkedInIcon, MediumIcon } from "./Icon-components/Icons-svg";

export function Footer() {

    const styleFooterSections = "hover:underline hover:text-primary-500 transition duration-300 ease-in-out";
    return (
        <footer className="bg-dark-bg-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 font-lato text-white text-sm">
                <div className="flex flex-col items-center justify-between gap-y-6">
                    <div className="">
                        <ul className="flex flex-wrap items-center gap-x-4 md:gap-x-6">
                            <li>
                                <a href="#" className={styleFooterSections}>HOME</a>
                            </li>
                            <li className="text-white hidden md:inline">|</li>
                            <li>
                                <a href="#" className={styleFooterSections}>ABOUT ME</a>
                            </li>
                            <li className="text-white hidden md:inline">|</li>
                            <li>
                                <a href="#" className={styleFooterSections}>PORTFOLIO</a>
                            </li>
                            <li className="text-white hidden md:inline">|</li>
                            <li>
                                <a href="#" className={styleFooterSections}>SKILLS</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-wrap items-center gap-x-4 md:gap-x-8">
                            <li>
                                <a href="#">
                                    <GithubIcon onHover="fill-primary-500"></GithubIcon>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <LinkedInIcon onHover="fill-primary-500"></LinkedInIcon>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <MediumIcon onHover="fill-primary-500"></MediumIcon>
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