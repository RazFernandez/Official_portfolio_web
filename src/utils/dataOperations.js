/* 
    This class contains function to manipulate
    data from the JSON object (Project data)
    such as filtering, merging and sorting
*/

export function mergeNonEmptyArrays(obj) {
    return Object.values(obj)
        .filter(arr => arr.length > 0)
        .flat();
}