import {expect} from "chai";

import pick from "@/pick";

describe("@jwn-js/pick", () => {
    it(`{a:1, b:2, c:3}, ["a", "c"] => {a:1, c:3}`, () => {
        const value = pick({a:1, b:2, c:3}, ["a", "c"]);
        expect(value).to.eql({a:1, c:3});
    });
    it(`independence from origin object`, () => {
        const obj = {a:1, b:2, c:3};
        const value = pick(obj, ["a", "c"]);
        obj.a = 10;
        expect(value).to.eql({a:1, c:3});
    });
});
