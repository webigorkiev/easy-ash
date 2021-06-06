/**
 * Intersections of array
 * @param arrays of arrays
 * @returns array of values
 */
export default (...arrays: Array<Array<any>>): Array<any> => {

    return arrays.reduce((a, b) => a.filter(c => b.includes(c)));
}