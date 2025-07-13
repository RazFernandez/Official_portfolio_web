/**
 * Formats a UTC date string into a human-readable format containing only the month and year.
 * Example input: "2025-07-23T05:00:00.000Z"
 * Example output: "July 2025"
 *
 * @param {string} utcDateString - The UTC ISO date string to format.
 * @returns {string} A string with the full month name and year, or the original string if the format is invalid.
 */

export function formatUTCToMonthYear(utcDateString) {
    const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

    if (regex.test(utcDateString)) {
        const dateObject = new Date(utcDateString);
        const options = { month: 'long', year: 'numeric', timeZone: 'UTC' };
        return dateObject.toLocaleString('en-US', options);
    }

    // Return the original string if it doesn't match the expected UTC format
    return utcDateString;
}