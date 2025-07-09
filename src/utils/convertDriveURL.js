/**
 * Converts a standard Google Drive sharing URL into a direct thumbnail URL with a fixed width.
 * 
 * Supports the following Google Drive URL formats:
 *   - https://drive.google.com/open?id=FILE_ID
 *   - https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *
 * Converts the URL into:
 *   - https://drive.google.com/thumbnail?id=FILE_ID&sz=w1000
 *
 * This is useful for embedding Google Drive images as thumbnails in web applications.
 * 
 * @param {string} url - The original Google Drive sharing URL.
 * @returns {string} A direct thumbnail URL if a valid ID is found, otherwise returns the original URL.
 */

export function convertURLGoogleDrive(url) {
    // Regular expression to extract the file ID from both common Google Drive URL formats
    const regex = /https:\/\/drive\.google\.com\/(?:open\?id=|file\/d\/)([a-zA-Z0-9_-]+)/;

    // Attempt to match and extract the file ID
    const match = url.match(regex);

    // If a valid ID is found, return a formatted thumbnail URL
    if (match) {
        return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
    }

    // If the input does not match, return the original URL
    return url;
}