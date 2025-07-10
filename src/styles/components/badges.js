/* 
    This file contains all of the styles
    used in badges following the tailwind css
    style of using classes to style components
    instead of pure css.
*/

const BADGES_STYLES = {
    tagBadge:
        "bg-green-900 text-green-300 text-xs font-exo2 font-medium px-2.5 py-0.5 rounded-sm",
    statusBadgeCompleted:
        "absolute top-2 left-2 z-10 bg-primary-500 text-white text-sm font-bold inline-flex items-center gap-x-1 px-2 py-0.5 rounded-sm border border-gray-500",
    statusBadgeDeveloping:
        "absolute top-2 left-2 z-10 bg-yellow-900 text-white text-sm font-bold inline-flex items-center gap-x-1 px-2 py-0.5 rounded-sm border border-gray-500",
};

export default BADGES_STYLES;
