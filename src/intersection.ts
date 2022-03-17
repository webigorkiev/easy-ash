/**
 * Intersections of array
 * @param arrays of arrays
 * @returns array of values
 */
export default <T = any>(...arrays: Array<Array<T>>): Array<T> => {

    return arrays.reduce((a, b) => a.filter(c => b.includes(c)));
}