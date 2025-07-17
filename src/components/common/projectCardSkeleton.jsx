import DocumentIcon from "../icons/common/document";

export default function ProjectCardSkeleton() {
    return (
        <div
            role="status"
            className="max-w-sm p-4 border border-gray-700 rounded-sm shadow-sm animate-pulse md:p-6 lg:mb-16"
        >
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-700 rounded-sm">
                <DocumentIcon />
            </div>
            <div className="h-2.5 bg-gray-700 rounded-full w-48 mb-4"></div>
            <div className="h-2 bg-gray-700 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-700 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-700 rounded-full"></div>
            <span className="sr-only">Loading...</span>
        </div>
    );
}