/* 
    This file gathers all the individual components that
    can assist in building a website navbar.
*/


/* 
    This component represents an item of a typical navbar
    that displays a logo image along with its brand name.
    You can add an image, svg and optional text and a href
    to redirect the user.
*/

export function NavbarFavicon({ LogoImage, children }) {
    return (
        <>
            <a className="flex items-center space-x-3 rtl:space-x-reverse pb-0 md:pb-4 xl:pb-0">
                <img src={LogoImage} className="h-8" alt="Portfolio Logo" />
                <span className="self-center text-2xl font-exo2 whitespace-nowrap text-white">{children}</span>
            </a>
        </>
    );
}

/* 
    This component creates a typical navbar item that only
    displays text and you can indicate if active (represents the
    current page) or not
*/

export function NavbarItem({ children, isCurrentPage = false }) {
    
    const currentPageStyleButton = 'block py-3 px-4 text-white bg-primary-500';
    const defaultPageStyleButton = 'block py-3 px-4 text-white hover:bg-primary-500 focus:bg-secondary-500 transition duration-300 ease-in-out';
    
    const styleOfButtonItem = isCurrentPage ? currentPageStyleButton : defaultPageStyleButton

    return (
        <li>
            <a href="#"
                className={styleOfButtonItem}>
               { children }
            </a>
        </li>
    );

}

/*
    This component it's a type of navbar item that displays 
    an icon or image instead of text. You can also indicate
    if active or not.
*/

export function NavBarItemIcon({ children, url, ImageIcon = "", ImageDescription = "" }) {
    
    if (ImageIcon === "") {
        return (
            <li>
                <a href={url} target="_blank" class="block py-3 px-4 text-white md:cursor-pointer md:hover:bg-primary-500 md:focus:bg-secondary-500 transition duration-300 ease-in-out">
                    {children}
                </a>
            </li>
        );
    } else {
        return (
            <li>
                <a href={url} target="_blank" class="block py-3 px-4 text-white md:cursor-pointer md:hover:bg-primary-500 md:focus:bg-secondary-500 transition duration-300 ease-in-out">
                    <img src={ ImageIcon } alt={ ImageDescription} />
                </a>
            </li>
        );
    }
}


/*
    This component it's a type of navbar item that displays 
    an icon or image instead of text. You can also indicate
    if active or not.
*/

export function NavBarItemDropdown() {
    return (
        <div>

        </div>
    );
}