/*
    The first function called NavbarItemBar exposes the 
    section of the navbar elements to be included
    in the main navbar.
*/

export default function NavbarItemBar() {
    return (
        <div className="w-full hidden md:block md:w-auto">
            <ul className="font-exo2 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-dark-bg-700 md:bg-dark-bg-900 dark:border-gray-700">
                <NavbarItem isCurrentPage={true}>HOME</NavbarItem>
                <NavbarItem>ABOUT ME</NavbarItem>
                <NavbarItem>PORTFOLIO</NavbarItem>
                <NavbarItem>SKILLS</NavbarItem>
                <NavBarItemIcon></NavBarItemIcon>
                <NavBarItemIcon></NavBarItemIcon>
                <NavBarItemIcon></NavBarItemIcon>
            </ul>
        </div>
    );
}

/*
    This is the blueprint for building the sections in a typical
    navbar. You can chose between two styles, whether it's active
    (Meaning the item highlights the page you are currently on)
    or not the item section.
*/

/* 
    This component creates a typical navbar item that only
    displays text and you can indicate if active (represents the
    current page) or not
*/

export function NavbarItem({ children, isCurrentPage = false }) {
    
    // Styles of buttons in navbar
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