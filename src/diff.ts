import clean from "./clean";
import isObject from "./isObject";
import difference from "./difference";

/**
 * Diff Object from Objects
 * {st: [1,2,3]}, {st: [1]} => {st: [2,3]}
 * @param objects
 */
export default function diff(...objects: Array<Record<string, any>>) : Record<string, any> {
    objects = objects.map(o => Object.assign({}, o));

    // @ts-ignore
    return clean(objects.reduce((prev, obj) => {
        Object.keys(obj).forEach(key => {
            if(prev && prev.hasOwnProperty(key)) {
                const pVal = prev[key];
                const oVal = obj[key];

                if(Array.isArray(pVal) && Array.isArray(oVal)) {
                    prev[key] = difference(pVal, oVal);
                    prev[key] = prev[key].length ? prev[key] : undefined;
                } else if(isObject(pVal) && isObject(oVal)) {
                    prev[key] = diff(pVal, oVal);
                }
            }
        });

        return prev;
    }, objects.shift()), [undefined]);
}