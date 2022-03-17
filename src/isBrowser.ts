/**
 * Is code work in browser equipment
 */
export default (): boolean => new Function("try {return this===window;}catch(e){ return false;}")();