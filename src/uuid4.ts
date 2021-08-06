/**
 * Generate uuid4 and validator for its
 */
import crypto from 'crypto';

const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * uuid4 validation
 * @param {String} uuid
 * @return {boolean}
 */
export function uuid4Valid(uuid: string): boolean {

    return uuidPattern.test(uuid);
}

/**
 * Generate uuid4
 * @return {string}
 */
export function uuid4() {
    const rnd = crypto.randomBytes(16);
    rnd[6] = (rnd[6] & 0x0f) | 0x40;
    rnd[8] = (rnd[8] & 0x3f) | 0x80;

    const match = rnd
        .toString("hex")
        .match(/(.{8})(.{4})(.{4})(.{4})(.{12})/) as RegExpMatchArray;
    match.shift();

    return match.join("-");
}