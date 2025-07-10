import stylesComponents from "../../styles/stylesComponents";
import CheckIcon from "../icons/common/check";
import ClockIcon from "../icons/common/clock";

export default function StatusBadge({ isCompleted, date }) {

    const completedClasses = stylesComponents.badges.statusBadgeCompleted;
    const developingClasses = stylesComponents.badges.statusBadgeDeveloping;
    
    return (

        <span className={`${isCompleted ? completedClasses : developingClasses}`}>
            {isCompleted ? (<><CheckIcon /> {date} </>) : (<><ClockIcon/> Developing </>)}
        </span>
    );
}