/* 
    This file contains all of the styles
    used in bottons following the tailwind css
    style of using classes to style components
    instead of pure css.
*/

const BUTTONS_STYLES = {
    filled:
        "inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-lato font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-secondary-500 focus:ring-4 focus:ring-primary-900 transition duration-300 ease-in-out",
    outlined:
        "inline-flex items-center justify-center px-5 py-3 text-base font-lato font-medium text-center text-primary-300 border border-primary-300 rounded-lg hover:bg-primary-900 focus:ring-4 focus:ring-gray-800 transition duration-300 ease-in-out",
    filledIcon: 
    "inline-flex items-center px-3 py-2 gap-2 text-sm font-medium text-center text-white bg-primary-500 rounded-lg hover:bg-secondary-500 focus:ring-4 focus:outline-none focus:ring-primary-900 transition duration-300 ease-in-out",
    sectionIcon:
    "text-white bg-transparent p-4 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-secondary-800 cursor-pointer",
};

export default BUTTONS_STYLES;