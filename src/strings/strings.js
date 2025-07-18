/* 
    This class centrilized all of the strings
    needed to name static content in my portfolio
    web for better and easy use.
*/

import SECTION_NAMES from "./content/sectionNames"
import HERO_INFO from "./content/home";
import FALLBACK_TEXT from "./content/fallbackText";
import ABOUT_INFO from "./content/about";

const staticString = {
    sectionNames: SECTION_NAMES,
    sectionContent: {
        home: HERO_INFO,
        about: ABOUT_INFO,
    },
    fallbackText: FALLBACK_TEXT,
}

export default staticString;