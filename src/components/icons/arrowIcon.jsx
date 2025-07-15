export default function ArrowIcon({ direction = "DOWN" }) {
    const rotationClasses = {
        UP: "rotate-180",
        RIGHT: "rotate-90",
        LEFT: "rotate-270",
        DOWN: "rotate-0",
    };

    const directionStyle = rotationClasses[direction] || "rotate-0";

    return (
        <svg
            className={`w-5 h-5 ${directionStyle}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
            />
        </svg>
    );
}