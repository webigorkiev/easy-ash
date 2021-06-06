declare type pickByHandler = (v: any, k: string) => boolean;
declare const _default: (object: Record<string, any>, predicate?: pickByHandler) => Record<string, any>;
/**
 * Pick some keys from object by handler
 * @param object
 * @param predicate function with two arguments (value, key)
 * @return {any}
 */
export default _default;
