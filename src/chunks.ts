/**
 * Split array to chunks
 * [1,2,3,4,5,6,7,8,9,] => [[1,2,3], [4,5,6], [7,8,9]]
 * @param arr - input array
 * @param size - size of chunk
 * @returns array of array chunk
 */
export default <T = any>(arr: Array<T>, size: number) : Array<Array<T>> => {
    const n = arr.length;
    const output = [];

    for(let i = 0; i < n; i += size) {
        output.push(arr.slice(i, i + size));
    }

    return output;
}