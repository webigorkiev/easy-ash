/**
 * Pick some keys of object
 * @param  o - input object
 * @param  keys to pick
 * @returns object with pick keys
 */
export default <T extends string>(o: Record<string, any>, keys: Array<T>): Record<T, any> => {

    return Object.assign({}, ...keys.map(key => ({[key]: o[key]})));
}