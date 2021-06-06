import {expect} from "chai";

import replace from "@/replace";

describe("@jwn-js/replace", () => {
    it("{a:1, b:2}, {a: [1]} => {a: [1], b: 2}", () => {
        const value = replace({a:1, b:2}, {a: [1]});
        expect(value).to.eql({a: [1], b: 2});
    });
    it("{a:1, b:2}, {a: [1], c: 1} => {a: [1], b: 2}", () => {
        const value = replace({a:1, b:2}, {a: [1], c: 1});
        expect(value).to.eql({a: [1], b: 2, c: 1});
    });
    it("{a:1, b:2, d: undefined}, {a: [1], c: 1} => {a: [1], b: 2}", () => {
        const value = replace({a:1, b:2, d: undefined}, {a: [1], c: 1});
        expect(value).to.eql({a: [1], b: 2, c: 1});
    });
});
