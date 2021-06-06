import {expect} from "chai";

import pull from "@/pull";

describe("@jwn-js/pull", () => {
    it(`іf type(x) is different from Type(y), return false`, () => {
        const value = pull([1,2], "1");
        expect(value).to.eql([1,2]);
    });
    it(`NaN and NaN`, () => {
        const value = pull([NaN,2], NaN);
        expect(value).to.eql([2]);
    });
    it(`sameValueZero differs from SameValue only in its treatment of +0 and -0`, () => {
        const value = pull([+0,2], -0);
        expect(value).to.eql([2]);
    });
    it(`sameValueZero -0, +0`, () => {
        const value = pull([-0,2], +0);
        expect(value).to.eql([2]);
    });
    it(`if x is the same Number value as y, return true`, () => {
        const value = pull([1,2], 1);
        expect(value).to.eql([2]);
    });
    it(`undefined and undefined`, () => {
        const value = pull([undefined, 1,2], 1, undefined);
        expect(value).to.eql([2]);
    });
    it(`null and null`, () => {
        const value = pull([null, 1,2], 1, null);
        expect(value).to.eql([2]);
    });
    it(`false and false`, () => {
        const value = pull([false, 1,2], 1, false);
        expect(value).to.eql([2]);
    });
    it(`string and string`, () => {
        const value = pull(["p", 1,2], 1, "p");
        expect(value).to.eql([2]);
    });
    it(`Symbol and Symbol`, () => {
        const s = Symbol();
        const value = pull([s, 1,2], 1, s);
        expect(value).to.eql([2]);
    });
    it(`Symbol and another Symbol`, () => {
        const s1 = Symbol();
        const s2 = Symbol();
        const value = pull([s1, 1,2], 1, s2);
        expect(value).to.eql([s1,2]);
    });
});
