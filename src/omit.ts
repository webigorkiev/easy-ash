/**
 * The opposite of pick; this method creates an object composed 
 * of the own and inherited enumerable property paths of object that are not omitted.
 * @param obj
 * @param blacklist
 * @returns an object composed
 * of the own and inherited enumerable property paths of object that are not omitted
 */
export default (obj: Record<string, any>, blacklist: Array<string>): Record<string, any> => Object.keys(obj)
    .filter((key) => blacklist.indexOf(key) < 0)
    .reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});