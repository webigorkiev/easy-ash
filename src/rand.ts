/**
 * Gen rand from min to max inclusive
 * @param min from number
 * @param max to number
 * @return random number beetwin min, max inclusive
 */
export default (min: number, max: number): number => {

    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}