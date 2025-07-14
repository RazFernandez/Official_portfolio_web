export default function Grid3x3Layout({children}) {
    return (
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
            {children}
        </div>
    );
}

export function Grid4x3Layout({ children }) {
    return (
        <div className="w-full flex justify-center">
            <div className="grid gap-8 grid-cols-2 sm:grid-cols-5 md:gap-16 p-4">
                {children}
            </div>
        </div>
    );
}