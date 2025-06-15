
export default function NavbarFavicon({ LogoImage, children}) {
    return (
        <>
            <a className="flex items-center space-x-3 rtl:space-x-reverse pb-0 md:pb-4 xl:pb-0">
                <img src={LogoImage} className="h-8" alt="Portfolio Logo"/>
                <span className="self-center text-2xl font-exo2 whitespace-nowrap text-white">{children}</span>
            </a>
        </>
     );
}