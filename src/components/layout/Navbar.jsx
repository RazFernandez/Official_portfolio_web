import { useState } from "react";
import MyLogo from '../../assets/images/VentoTech-icon.png';
import NavbarItemBar from './Navbar/navbar-items-bar';
import BurgerButton from './Navbar/navbar-burger-button';
import { BugerButtonIcon } from '../icons/Icons-svg';
import { NavbarFavicon} from './Navbar/navbar-items-bar-components';

/* 
    This is the final navbar displayed in my portfolio web.
*/

export function Navbar() {
    /* 
    This state assists in hidding or displaying the navbar
    according to the screen size. When it's mobile, it only
    shows a burger button to display all of the entire navbar
    elements when clicked.
    */

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-dark-bg-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavbarFavicon LogoImage={MyLogo}>MIGUEL FERNANDEZ</NavbarFavicon>
                <BurgerButton onClickEvent={()=> setIsMenuOpen(!isMenuOpen)}>
                    <BugerButtonIcon></BugerButtonIcon>
                </BurgerButton>
                <NavbarItemBar isOpen={isMenuOpen}></NavbarItemBar>
            </div>
        </nav>
    );
}
