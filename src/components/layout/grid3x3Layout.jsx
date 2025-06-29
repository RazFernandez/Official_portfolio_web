export default function Grid3x3Layout({children}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
            {children}
        </div>
    );
}