/* 
    This class contains function to manipulate
    data from the JSON object (Project data)
    such as filtering, merging and sorting
*/

// it merges arrays and skips empty ones from
// and object with arrays.

export function mergeNonEmptyArrays(obj) {
    return Object.values(obj)
        .filter(arr => arr.length > 0)
        .flat();
}

export function sortProjectByDate(data, order = "ASC") {
    const cleanedOrder = (order || "").toUpperCase();
    const isDescending = cleanedOrder === "DES";

    return data
        .map(project => ({
            project,
            key: new Date(project.date).getTime()
        }))
        .sort((a, b) => isDescending ? b.key - a.key : a.key - b.key)
        .map(item => item.project);
}

export function filterProjectsByType(projects, type) {

    const validTypes = [
        "Professional Experience",
        "Personal Project",
        "Experimental Project"
    ];
    
    if (!validTypes.includes(type)) {
        console.warn(`Invalid project type: "${type}". Expected one of: ${validTypes.join(", ")}`);
        return [];
      }

    return projects.filter(project =>
        project.typeOfProject.toLowerCase() === type.toLowerCase()
    );
  }
