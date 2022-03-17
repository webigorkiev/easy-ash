const cloneForArray =  <T = any>(a: Array<any>, fn: CallableFunction): T[] => {
    const keys = Object.keys(a);
    const a2 = new Array(keys.length);

    for(let i = 0; i < keys.length; i++) {
        const k = keys[i];
        const cur = a[k];

        if(typeof cur !== 'object' || cur === null) {
            a2[k] = cur
        } else if(cur instanceof Date) {
            a2[k] = new Date(cur)
        } else {
            a2[k] = fn(cur)
        }
    }

    return a2
}

/**
 * Clone deep
 * @param o - input param
 */
export default function clone<T = any>(o: T|T[]) : T|T[]|Date {

    if(typeof o !== 'object' || o === null) {
        return o;
    }

    if(o instanceof Date) {
        return new Date(o);
    }

    if(Array.isArray(o)) {
        return cloneForArray<T>(o, clone);
    }

    const o2 = {} as T|any;

    for(const k in o) {

        if(Object.hasOwnProperty.call(o, k) === false) {
            continue;
        }
        const cur = o[k];

        if(typeof cur !== 'object' || cur === null) {
            o2[k] = cur
        } else if(cur instanceof Date) {
            o2[k] = new Date(cur)
        } else {
            o2[k] = clone(cur)
        }
    }

    return o2
}