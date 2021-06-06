/**
 * Clean Object|Array recursive
 * remove undefined, null, '' by default
 * @param input - input Object or Array
 * @param clear - Array of clean values
 * @return Purified value
 */
export default function clean<T>(input: Record<string, any> | Array<any>, clear?: Array<any>): Record<string | number, T> | Array<string | number>;
