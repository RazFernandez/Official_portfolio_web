export default function Grid3x3Layout({ children }) {
    return (
        <div className="flex items-center justify-center">
            <div className="mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {children}
            </div>
        </div>
    );
}


export function Grid4x3Layout({ children }) {
    return (
        <div className="w-full flex justify-center">
            <div className="grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:gap-16 p-4">
                {children}
            </div>
        </div>
    );
}

