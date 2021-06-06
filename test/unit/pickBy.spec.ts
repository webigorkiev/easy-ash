import {expect} from "chai";

import pickBy from "@/pickBy";

describe("@jwn-js/pickBy", () => {
    it(`{a:1, b:2, c:3}, ["a", "c"] => {a:1, c:3} by callback handler`, () => {
        const value = pickBy({a:1, b:2, c:3}, (v, k) => {

            return ["a", "c"].includes(k);
        });
        expect(value).to.eql({a:1, c:3});
    });
    it(`independence from origin object`, () => {
        const obj = {a:1, b:2, c:3};
        const value = pickBy(obj, (v, k) => {

            return ["a", "c"].includes(k);
        });
        obj.a = 10;
        expect(value).to.eql({a:1, c:3});
    });
});
