// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (target: any): boolean => {

    if(typeof target === 'function') {
        const keys = Reflect.ownKeys(target);

        // class or arrow function
        if(!keys.includes('arguments') && !keys.includes('caller')) {

            // class
            if(keys.includes('prototype')) {
                return true
            }
        }
    }

    return false
};