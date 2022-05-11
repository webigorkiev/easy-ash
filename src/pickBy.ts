/**
 * Pick some keys from object by handler
 */
export default <T extends Record<string, any>, K extends keyof T>(
    object: T,
    predicate: (v: any, k: K) =>  boolean = (v) => !!v
): Pick<T, K> => {
    if(object === null) {
        return object;
    }
    const entries = Object
        .entries(object)
        .filter(([k, v]) => predicate(v, k as K))
        .map(([k, v]) => ({ [k]: v }));

    return (entries.length ? Object.assign({}, ...entries) : {}) as Pick<T, K>;
}