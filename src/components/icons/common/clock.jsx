export default function ClockIcon() {
    return (
        <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="
                M2 12
                C2 6.477 6.477 2 12 2
                s10 4.477 10 10
                -4.477 10 -10 10
                S2 17.523 2 12
                Zm11-4
                a1 1 0 1 0-2 0
                v4
                a1 1 0 0 0 .293.707
                l3 3
                a1 1 0 0 0 1.414-1.414
                L13 11.586
                V8Z
                "
            />
        </svg>
    );
}