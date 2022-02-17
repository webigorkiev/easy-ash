/**
 * Clean Object|Array recursive
 * remove undefined, null, '' by default
 * @param input - input Object or Array
 * @param clear - Array of clean values
 * @return Purified value
 */
export default function clean<T extends Record<string, any>|Array<any>>(
    input: T,
    clear: Array<any> = [undefined, null, '']
): T {
    if(Array.isArray(input)) {
        return input.filter(v => !clear.includes(v)) as T
    }

    input =  Object.assign({}, input);
    Object.keys(input).map(key => {

        if(
            typeof input[key] === "object"
            && input[key] !== null
            && !(input[key] instanceof Date)
        ) {
            input[key] = clean(input[key], clear);
        } else if(clear.includes(input[key])) {
            delete(input[key]);
        }
    });

    return input;
}