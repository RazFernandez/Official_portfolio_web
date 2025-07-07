import { useState } from "react";
import { NavbarItem, NavBarItemIcon, NavBarItemDropdown, NavbarSubItem, NavbarMenuItems } from "./navbarItemsBarComponents";
import { GithubIcon, LinkedInIcon, MediumIcon } from "../../icons/Icons-svg";

/*
    This component is a blueprint that builds the
    section of both items, those with just text and
    those with only icons
*/

export default function NavbarItemBar({ isOpen }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={`w-full ${isOpen ? "block" : "hidden"} md:block md:w-auto`}>
            <ul className="font-exo2 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-dark-bg-700 md:bg-dark-bg-900 dark:border-gray-700">
                <NavbarItem isCurrentPage={true} path={"/"}>HOME</NavbarItem>
                <NavbarItem path={"/about"}>ABOUT ME</NavbarItem>
                <NavbarItem path={"/portfolio"}>PORTFOLIO</NavbarItem>
                <NavbarItem path={"/skills"}>SKILLS</NavbarItem>
                <NavBarItemDropdown dropdownName={"SOCIAL MEDIA"} onClickEvent={() => setIsMenuOpen(!isMenuOpen)}>
                    <NavbarMenuItems isOpen={isMenuOpen}>
                        <NavbarSubItem>LinkedIn</NavbarSubItem>
                        <NavbarSubItem>GitHub</NavbarSubItem>
                        <NavbarSubItem>Medium</NavbarSubItem>
                    </NavbarMenuItems>
                </NavBarItemDropdown>
                <NavBarItemIcon>
                    <GithubIcon></GithubIcon>
                </NavBarItemIcon>
                <NavBarItemIcon>
                    <LinkedInIcon></LinkedInIcon>
                </NavBarItemIcon>
                <NavBarItemIcon>
                    <MediumIcon></MediumIcon>
                </NavBarItemIcon>
                
            </ul>
        </div>
    );
}
