import clean from "./clean";
import isObject from './isObject';

/**
 * Deep Merge for Object
 * @param objects
 * @returns result object
 */
export default function mergeDeep(...objects: Array<Record<string, any>>) : Record<string, any> {
    objects = objects.map(o => Object.assign({}, o));

    // @ts-ignore
    return clean(objects.reduce((prev, obj) => {
        Object.keys(obj).forEach(key => {
            if(prev) {
                const pVal = prev[key];
                const oVal = obj[key];

                if(Array.isArray(pVal) && Array.isArray(oVal)) {
                    prev[key] = [...new Set(pVal.concat(...oVal))];
                } else if(isObject(pVal) && isObject(oVal)) {
                    prev[key] = mergeDeep(pVal, oVal);
                } else {
                    prev[key] = oVal;
                }
            }
        });

        return prev;
    }, objects.shift()), [undefined]);
}