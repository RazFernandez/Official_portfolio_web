/* 
    This component creates the footer section
    of my portfolio web. It contains sections to
    other pages, my social media and a copyright 
    section 
*/

import { GithubIcon, LinkedInIcon, MediumIcon } from "./Icon-components/Icons-svg";

export function Footer() {
    return (
            <footer>
                <div>
                    <div>
                        <ul>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">HOME</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">ABOUT ME</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">PORTFOLIO</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">SKILLS</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <GithubIcon></GithubIcon>
                            <LinkedInIcon></LinkedInIcon>
                            <MediumIcon></MediumIcon>
                        </ul>
                    </div>
                    <div>
                        <p>@2024 All Rights Reserved</p>
                    </div>
                </div>
            </footer>
    );
}