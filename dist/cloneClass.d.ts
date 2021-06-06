declare type Class<T = any> = new (...args: any[]) => T;
declare const _default: (cloneClass: Class) => Class;
/**
 * Clone es6 class - for slove problem of chenged prototype
 * @param cloneClass
 * @return
 */
export default _default;
