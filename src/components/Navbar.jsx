import myLogo from '../assets/images/VentoTech-icon.png';

export function Navbar() {
    return (
        <nav className="bg-dark-bg-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a className="flex items-center space-x-3 rtl:space-x-reverse pb-0 md:pb-4 xl:pb-0">
                    <img src={myLogo} className="h-8" alt="Portfolio Logo"></img>
                </a>
            </div>

            {/* <h1>Miguel Fernandez</h1>
            <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Portfolio</li>
            </ul> */}
        </nav>
    )
}