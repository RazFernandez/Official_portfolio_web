import MyLogo from '../assets/images/VentoTech-icon.png';
import NavbarFavicon from './navabar-components/navbar-favicon';
import NavbarItemBar from './navabar-components/navbar-items-bar';

export function Navbar() {
    return (
        <nav className="bg-dark-bg-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavbarFavicon LogoImage={MyLogo}>MIGUEL FERNANDEZ</NavbarFavicon>
                <NavbarItemBar></NavbarItemBar>
            </div>
        </nav>
    );
}