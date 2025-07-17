/* 
    This module is responsible for retrieving project data from a Google Sheets backend
    via an Apps Script web app. To enhance performance and user experience, a simple 
    cache mechanism using localStorage is implemented.

    Cached data is used to avoid repeated fetches on every page reload. The cache is 
    considered valid for 10 minutes. After that, fresh data is fetched and stored again.
*/

const API_URL = "https://script.google.com/macros/s/AKfycbyQNHZ4Np1apAdnbiUzRnvDZ_BK0TQocnzuxcv1i4Ypt05JqRxh6StO6ZfPMVKkRnDM/exec";

// LocalStorage keys for the project data and its associated timestamp
const CACHE_KEYS = ["projects", "projects_timestamp"];

// Cache lifespan: 10 minutes (in milliseconds)
const CACHE_DURATION = 1000 * 60 * 10;

// Main function to retrieve project data (from cache or API)
export async function getProjectData() {
    const cacheData = sessionStorage.getItem(CACHE_KEYS[0]);
    const cachedTimeStamp = sessionStorage.getItem(CACHE_KEYS[1]);
    const nowTimeStamp = Date.now();

    // If data exists and it's still considered fresh, return it directly
    if (cacheData && cachedTimeStamp && nowTimeStamp - cachedTimeStamp < CACHE_DURATION) {

        // Parsing is necessary because sessionStorage stores strings, not objects
        return JSON.parse(sessionStorage.getItem(CACHE_KEYS[0]));
    }

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Store the fresh data and the current timestamp for future cache validation
        sessionStorage.setItem("projects", JSON.stringify(data));
        sessionStorage.setItem("projects_timestamp", nowTimeStamp.toString());

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);

        // If API call fails, fallback to cached data if available
        return cacheData ? JSON.parse(cacheData) : null;
    }
}

