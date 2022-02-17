/**
 * Pick some keys of object
 * @param  o - input object
 * @param  keys to pick
 * @returns object with pick keys
 */
export default <T, K extends keyof T>(o: T, keys: K[]): Pick<T, K> => {

    return Object.assign({}, ...keys.map(key => ({[key]: o[key]})));
}