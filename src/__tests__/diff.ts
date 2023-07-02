import diff from "../diff";

describe("@jwn-js/diff", () => {
    const input = {a:1, b: [1,2,3,4,5], c: {a: [1,2,3]}, d: undefined};
    const output = {a:1, b: [1,2,3,4], c: {a: [1,3]}};
    const diffval = {b: [5], c: {a: [2]}};

    it(`{a:1, b: [1,2,3,4,5], c: {a: [1,2,3]}, d: undefined} => {a:1, b: [1,2,3,4], c: {a: [1,3]}}`, () => {
        expect(diff(input, diffval)).to.eql(output);
    });
});
