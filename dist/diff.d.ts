/**
 * Diff Object from Objects
 * {st: [1,2,3]}, {st: [1]} => {st: [2,3]}
 * @param objects
 */
export default function diff(...objects: Array<Record<string, any>>): Record<string, any>;
