/*
    This class is intended to group all of the styles
    according to components for better 
    reusability and maintenece.

    When you want to use an specific style for a
    component, refer to this class and track the
    exact style you want to apply to your components
*/

import BUTTONS_STYLES from "./components/buttons";
import HEADLINES_STYLES from "./components/headlines";
import CARDS_STYLES from "./components/cards";
import BADGES_STYLES from "./components/badges";

const stylesComponents = {
    buttons: BUTTONS_STYLES,
    headlines: HEADLINES_STYLES,
    cards: CARDS_STYLES,
    badges: BADGES_STYLES
}

export default stylesComponents;