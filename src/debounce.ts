/**
 * Creates a debounced function that delays invoking func until after
 * wait milliseconds have elapsed since the last time the debounced
 * function was invoked
 */
export default (func: CallableFunction, wait: number = 0, immediate: boolean = false) : CallableFunction => {

    let timeout: ReturnType<typeof setTimeout>| null;
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
                func.apply(context, args);
            }
        }, wait);

        if(immediate && !timeout) {

            // @ts-ignore
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