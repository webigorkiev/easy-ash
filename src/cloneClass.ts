declare type Class<T = any> = new (...args: any[]) => T;

/**
 * Clone es6 class - for slove problem of chenged prototype
 * @param cloneClass
 * @return
 */
export default (cloneClass: Class): Class => {
    class AnotherOriginalClass extends cloneClass {
        constructor(...args: Array<any>) {
            super(...args)
        }
    }

    Object.defineProperty(AnotherOriginalClass, 'name', {
        value: cloneClass.name,
    });

    return AnotherOriginalClass;
}