/**
 * Creates an array of array values not included in the other given
 * @param arr - start array
 * @param  rm - array that remove from start
 * @returns array of array values not included in the other given
 */
export default <T>(arr: Array<T>, rm: Array<any>) : Array<T> => arr.filter(v => !rm.includes(v));