export default function NavbarItemBar(){
    return (
        <div className="w-full hidden md:block md:w-auto">
            <ul className="font-exo2 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-dark-bg-700 md:bg-dark-bg-900 dark:border-gray-700">
                <NavbarItem isCurrentPage={true}>HOME</NavbarItem>
                <NavbarItem>ABOUT ME</NavbarItem>
                <NavbarItem>PORTFOLIO</NavbarItem>
                <NavbarItem>SKILLS</NavbarItem>
            </ul>
        </div>
    );
}

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