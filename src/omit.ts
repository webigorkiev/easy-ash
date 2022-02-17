/**
 * The opposite of pick; this method creates an object composed
 * of the own and inherited enumerable property paths of object that are not omitted.
 * @param obj
 * @param blacklist
 * @returns an object composed
 * of the own and inherited enumerable property paths of object that are not omitted
 */
export default <T extends Record<string, any>, K extends [...(keyof T)[]]>(obj: T, blacklist: K): {
    [K2 in Exclude<keyof T, K[number]>]: T[K2]
} => Object.keys(obj)
    .filter((key) => blacklist.indexOf(key) < 0)
    .reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {} as T);