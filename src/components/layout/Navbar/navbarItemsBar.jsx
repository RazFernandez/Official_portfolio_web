import { useState } from "react";
import { NavbarItem, NavBarItemIcon, NavBarItemDropdown, NavbarSubItem, NavbarMenuItems } from "./navbarItemsBarComponents";
import { GithubIcon, LinkedInIcon, MediumIcon } from "../../icons/Icons-svg";
import { useLocation } from "react-router-dom";
/*
    This component is a blueprint that builds the
    section of both items, those with just text and
    those with only icons
*/

export default function NavbarItemBar({ isOpen }) {

    /* 
    This structure is used to indicate the active 
    page of the protfolio web.
    */

    const location = useLocation().pathname;
    let isActive = [false,false,false,false];
    switch (location) {
        case "/":
            isActive = [true, false, false, false]
            break;
        case "/about":
            isActive = [false, true, false, false]
            break;
        case "/portfolio":
            isActive = [false, false, true, false]
            break;
        case "/skills":
            isActive = [false, false, false, true]
            break;
        default:
            isActive = [true, false, false, false]
    }
    
    // It handles the
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={`w-full ${isOpen ? "block" : "hidden"} md:block md:w-auto`}>
            <ul className="font-exo2 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-dark-bg-700 md:bg-dark-bg-900 dark:border-gray-700">
                <NavbarItem isCurrentPage={isActive[0]} path={"/"}>HOME</NavbarItem>
                <NavbarItem isCurrentPage={isActive[1]} path={"/about"} >ABOUT ME</NavbarItem>
                <NavbarItem isCurrentPage={isActive[2]} path={"/portfolio"}>PORTFOLIO</NavbarItem>
                <NavbarItem isCurrentPage={isActive[3]} path={"/skills"}>SKILLS</NavbarItem>
                <NavBarItemDropdown dropdownName={"SOCIAL MEDIA"} onClickEvent={() => setIsMenuOpen(!isMenuOpen)}>
                    <NavbarMenuItems isOpen={isMenuOpen}>
                        <NavbarSubItem>LinkedIn</NavbarSubItem>
                        <NavbarSubItem>GitHub</NavbarSubItem>
                        <NavbarSubItem>Medium</NavbarSubItem>
                    </NavbarMenuItems>
                </NavBarItemDropdown>
                <NavBarItemIcon url={"https://github.com/RazFernandez"}>
                    <GithubIcon/>
                </NavBarItemIcon>
                <NavBarItemIcon url={"https://www.linkedin.com/in/mrfernández/"}>
                    <LinkedInIcon/>
                </NavBarItemIcon>
                <NavBarItemIcon url={"https://medium.com/@RazielFernandez"}>
                    <MediumIcon/>
                </NavBarItemIcon>
                
            </ul>
        </div>
    );
}
