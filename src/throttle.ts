/**
 * Start function not not more often
 * @param {CallableFunction} callback
 * @param {Number} wait
 * @param {Boolean} immediate
 * @return {Function}
 */
export default (
    callback: CallableFunction,
    wait: number = 0,
    immediate: boolean = false
): CallableFunction => {
    let timeout: any = null;
    let initialCall = true;

    return function() {

        // eslint-disable-next-line prefer-rest-params
        const args: any = arguments;
        const callNow = immediate && initialCall;
        const next = () => {

            // @ts-ignore
            callback.apply(this, args);
            timeout = null
        };

        if(callNow) {
            initialCall = false;
            next()
        }

        if(!timeout) {
            timeout = setTimeout(next, wait)
        }
    }
}