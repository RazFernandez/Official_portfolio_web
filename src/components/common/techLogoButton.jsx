/**
 * TechLogoSquare is a reusable component that renders a square div
 * with a semi-transparent green background and an icon inside.
 *
 * Props:
 * - logoUrl (string): URL of the logo image to display.
 * - href (string): External link to more information about the technology.
 * - alt (string): Alt text for accessibility and SEO.
 */

export default function TechLogoButton({ logoUrl, href = "#", alt = "Technology logo" }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
        >
            <div className="w-32 h-32 bg-green-500/20 rounded-sm flex items-center justify-center shadow-sm
                            transition duration-300 ease-in-out hover:bg-green-400/20">
                <img
                    src={logoUrl}
                    alt={alt}
                    className="w-24 h-24 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />
            </div>
        </a>
    );
}