export interface DebouncedFunction<Args extends any[],
    F extends (...args: Args) => any> {
    (this: ThisParameterType<F>, ...args: Args & Parameters<F>): Promise<ReturnType<F>>;

    cancel: (reason?: any) => void;
}

/**
 * Creates a debounced function that delays invoking func until after
 * wait milliseconds have elapsed since the last time the debounced
 * function was invoked
 */
export default <Args extends any[], F extends (...args: Args) => any>(
    func: F, wait:
        number = 0,
    immediate: boolean = false
): DebouncedFunction<Args, F> => {

    let timeout: NodeJS.Timeout | null;
    const debounce = function() {

        // eslint-disable-next-line prefer-rest-params,@typescript-eslint/no-this-alias
        const context = this, args = arguments;

        if(timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function() {
            timeout = null;

            if(!immediate) {
                // @ts-ignore
                return func.apply(context, args);
            }
        }, wait);

        if(immediate && !timeout) {

            // @ts-ignore
            return func.apply(context, args);
        }
    };

    debounce.cancel = () => {

        if(timeout) {
            clearTimeout(timeout);
        }
    };

    return debounce;
}