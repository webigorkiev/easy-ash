/**
 * Is code work in browser equipment
 */
export default new Function("try {return this===window;}catch(e){ return false;}");