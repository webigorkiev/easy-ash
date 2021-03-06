/**
 * Removes all given values from array using SameValueZero for equality comparisons
 * http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero
 * @param arr input arr
 * @param removeList
 * @return output array
 */
export default (arr: Array<any>, removeList: Array<any>): Array<any> => {
    const removeSet = new Set(removeList);

    return arr.filter((el) => !removeSet.has(el));
}