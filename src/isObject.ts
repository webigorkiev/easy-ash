/**
 * Is Object
 * @param obj - input value
 */
export default (obj: any): boolean => obj != null && typeof obj === 'object' && !Array.isArray(obj);