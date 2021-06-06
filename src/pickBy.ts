declare type pickByHandler = (v: any, k: string) =>  boolean;

/**
 * Pick some keys from object by handler
 * @param object
 * @param predicate function with two arguments (value, key)
 * @return {any}
 */
export default (
    object: Record<string, any>, 
    predicate: pickByHandler = (v) => !!v
) : Record<string, any> => {

    if(object === null) return object;

    const entries = Object
        .entries(object)
        .filter(([k, v]) => predicate(v, k))
        .map(([k, v]) => ({ [k]: v }));

    // @ts-ignore
    return entries.length ? Object.assign(...entries) : {};
}