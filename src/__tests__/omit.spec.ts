import omit from "../omit";

describe("@jwn-js/omit", () => {
    it(`{a:1, b:2, c:3}, ["a", "c"] => {b:2}`, () => {
        const value = omit({a:1, b:2, c:3}, ["a", "c"]);
        expect(value).to.eql({b:2});
    });
    it(`independence from origin object`, () => {
        const obj = {a:1, b:2, c:3};
        const value = omit(obj, ["a", "c"]);
        obj.b = 10;
        expect(value).to.eql({b:2});
    });
});
