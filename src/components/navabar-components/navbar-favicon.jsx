/* 
    Move this to the navbar-items-bar file to organize 
    better relate dcomponents
*/


/* 
    This component represents an item of a typical navbar
    that displays a logo image along with its brand name.
    You can add an image, svg and optional text and a href
    to redirect the user.
*/

export default function NavbarFavicon({ LogoImage, children }) {
    return (
        <>
            <a className="flex items-center space-x-3 rtl:space-x-reverse pb-0 md:pb-4 xl:pb-0">
                <img src={LogoImage} className="h-8" alt="Portfolio Logo"/>
                <span className="self-center text-2xl font-exo2 whitespace-nowrap text-white">{children}</span>
            </a>
        </>
     );
}