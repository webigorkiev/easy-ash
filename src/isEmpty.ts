export default (obj: Record<string, any>| Array<any>) : boolean => {

    // @ts-ignore
    return [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;
}