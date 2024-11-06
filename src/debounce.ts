export interface DebouncedFunction<Args extends IArguments[],
    F extends (...args: Args) => any> {
    (this: ThisParameterType<F>, ...args: Args & Parameters<F>): void;
    cancel: (reason?: any) => void;
}

export default <Args extends any[], F extends (...args: Args) => any>(
    func: F,
    wait: number = 0,
    immediate: boolean = false
): DebouncedFunction<Args, F> => {
    let timeout: NodeJS.Timeout | null;
    const debounce = function() {
        const context = this, args = arguments as unknown as Args;
        if(timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(function() {
            timeout = null;
            if(!immediate) {
                func.apply(context, args);
            }
        }, wait);

        if(immediate && !timeout) {
            func.apply(context, args);
        }
    };
    debounce.cancel = () => {
        if(timeout) {
            clearTimeout(timeout);
        }
    };
    return debounce;
}