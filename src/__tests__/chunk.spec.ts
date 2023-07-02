import chunks from "../chunks";

describe("@jwn-js/chunks", () => {
    it("[1,2,3,4] => [[1,2],[3,4]]", () => {
        const value = chunks([1,2,3,4], 2);
        expect(value).to.eql([[1,2],[3,4]]);
    });
});
