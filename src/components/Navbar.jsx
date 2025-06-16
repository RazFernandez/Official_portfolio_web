import MyLogo from '../assets/images/VentoTech-icon.png';
import NavbarItemBar from './navabar-components/navbar-items-bar';
import BurgerButton from './navabar-components/navbar-burger-button';
import { BugerButtonIcon } from './Icon-components/Icons-svg';
import { NavbarFavicon } from './navabar-components/navbar-items-bar-components';

/* 
    This is the final navbar displayed in my portfolio web.
*/

export function Navbar() {
    return (
        <nav className="bg-dark-bg-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavbarFavicon LogoImage={MyLogo}>MIGUEL FERNANDEZ</NavbarFavicon>
                <BurgerButton>
                    <BugerButtonIcon></BugerButtonIcon>
                </BurgerButton>
                <NavbarItemBar></NavbarItemBar>
            </div>
        </nav>
    );
}
