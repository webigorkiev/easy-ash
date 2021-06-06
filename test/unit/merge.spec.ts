import {expect} from "chai";

import merge from "@/merge";

describe("@jwn-js/merge", () => {
    const obj1 = {a:1, b: [1,2], c: null, f: 1};
    const obj2 = {c:2, d: {a:1}};
    const obj3 = {a:2, b: [3], e: [1]};
    const result = {a:2, b: [1,2,3], c:2, d: {a:1}, e: [1], f: 1};

    it("Deep merges of 3 objects iclude array", () => {
        const value = merge(obj1, obj2, obj3);
        expect(value).to.eql(result);
    });
    it("check independence of original objects", () => {
        const value = merge(obj1, obj2, obj3);
        obj1.f = 2;
        expect(value).to.eql(result);
    });
    it("check filter undefined", () => {
        const value = merge({a:1, b: undefined});
        expect(value).to.eql({a: 1});
    });
});
