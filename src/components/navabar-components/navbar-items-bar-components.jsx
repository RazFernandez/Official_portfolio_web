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
                <a href={url} target="_blank" className="hidden md:block py-3 px-4 text-white md:cursor-pointer md:hover:bg-primary-500 md:focus:bg-secondary-500 transition duration-300 ease-in-out">
                    {children}
                </a>
            </li>
        );
    } else {
        return (
            <li>
                <a href={url} target="_blank" class="hidden md:block py-3 px-4 text-white md:cursor-pointer md:hover:bg-primary-500 md:focus:bg-secondary-500 transition duration-300 ease-in-out">
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

export function NavBarItemDropdown({children, dropdownName, onClickEvent}) {
    const defaultPageStyleButton = "md:hidden flex items-center justify-between w-full py-3 px-4 text-white hover:bg-primary-500 focus:bg-secondary-500 transition duration-300 ease-in-out md:w-auto"
    

    return (
        <>
            <button className={defaultPageStyleButton} onClick={onClickEvent}> {dropdownName}
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="m1 1 4 4 4-4" />
                </svg>
            </button>
            {children}
        </>
    );
}

/*
    This components it's the layour for storing menuItems
    components
*/

export function NavbarMenuItems({ children, isOpen}) {
    
    const defaultMenustyle = `z-10 ${isOpen ? "bloc" : "hidden"} font-normal bg-secondary-800 divide-y divide-gray-600 rounded-lg shadow-sm w-44`

    return (
        <div className={defaultMenustyle}>
            <ul className="py-2 text-sm text-gray-200">
                {children}
            </ul>
        </div>
    );
}

/*
    This component it's submenu item that goes
    inside a NavbarMenuItems or another layout
*/

export function NavbarSubItem({ children, href}) {
    
    const defaultSubItemStyleButton = "md:hidden flex items-center justify-between w-full py-3 px-4 text-white hover:bg-primary-500 focus:bg-secondary-500 transition duration-300 ease-in-out md:w-auto"

    return (
        <li>
            <a href={href} target="_blank"
                className={defaultSubItemStyleButton}>{children}</a>
        </li>
    );
}