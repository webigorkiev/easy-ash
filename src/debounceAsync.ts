export interface DebouncedFunction<Args extends IArguments[],
    F extends (...args: Args) => any> {
    (this: ThisParameterType<F>, ...args: Args & Parameters<F>): Promise<ReturnType<F>>;
    cancel: (reason?: any) => void;
}

export default <Args extends any[], F extends (...args: Args) => any>(
    func: F,
    wait: number = 0,
    immediate: boolean = false
): DebouncedFunction<Args, F> => {
    let timeout: NodeJS.Timeout | null;
    let isImmediateRun = false; // Был ли запуск по immediate
    const debounce = function() {
        const context = this, args = arguments as unknown as Args;
        return new Promise<ReturnType<F>>((resolve) => {
            if(immediate && !isImmediateRun) {
                isImmediateRun = true;
                resolve(func.apply(context, args)); // Если immediate - выполнится сразу
            } else { // Если immediate и 2-й раз - установится таймер и выполнится по таймеру
                if(!timeout) {
                    timeout = setTimeout(function() {
                        timeout = null;
                        if(!immediate) {
                            resolve(func.apply(context, args));
                        }
                    }, wait);
                }
            }
        });
    };
    debounce.cancel = () => {
        if(timeout) {
            clearTimeout(timeout);
        }
    };
    return debounce;
}