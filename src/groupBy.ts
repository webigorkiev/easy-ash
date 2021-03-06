declare type criteriaHandler = (v: any) =>  string|number;
/*
 * Vanilla group by a.k.a lodash
 * @param  The array to group items from
 * @param  The criteria to group by
 * @return The grouped object
 */
export default <T = any>(arr: Array<T>, criteria: criteriaHandler|string|number) : Record<string, T> => {
    return arr.reduce((obj, item) => {

        const key = typeof criteria === 'function' ? criteria(item) : item[criteria];

        if(!obj.hasOwnProperty(key)) {
            obj[key] = [];
        }
        obj[key].push(item);

        return obj;
    }, {});
};