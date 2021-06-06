import isObject from "./isObject";
import clone from "@/cloneDeep";
import clean from "@/clean";

export default function replaceDeep(...objects: Array<Record<string, any|Array<any>>>):Record<string, any|Array<any>>  {
    objects = objects.map(o => Object.assign({}, o));

    // @ts-ignore
    return clean(objects.reduce((prev, obj) => {
        Object.keys(obj).forEach(key => {
            if(prev) {
                const pVal = prev[key];
                const oVal = obj[key];

                if(Array.isArray(pVal) && Array.isArray(oVal)) {
                    prev[key] = clone(oVal);
                } else if(isObject(pVal) && isObject(oVal)) {
                    prev[key] = replaceDeep(pVal, oVal);
                } else {
                    prev[key] = oVal;
                }
            }
        });

        return prev;
    }, objects.shift()), [undefined]);
}