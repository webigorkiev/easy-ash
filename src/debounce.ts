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
    let timeout: NodeJS.Timeout;
    let isImmediateRun = false; // Был ли запуск по immediate
    const debounce = function() {
        const context = this, args = arguments as unknown as Args;
        if(immediate && !isImmediateRun) { // Первый раз если immediate выполнится сразу
            isImmediateRun = true;
            func.apply(context, args);
        } else { // Во второй раз если immediate установится таймер
            if(!timeout) { // В течение временного интервала выполнится только раз
                timeout = setTimeout(function() {
                    clearTimeout(timeout);
                    func.apply(context, args);
                }, wait);
            }
        }
    };
    debounce.cancel = () => {
        if(timeout) {
            clearTimeout(timeout);
        }
    };
    return debounce;
}