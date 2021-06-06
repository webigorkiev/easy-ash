import {assert} from "chai";
import isEmpty from "@/isEmpty";

describe("@jwn-js/isEmpty", () => {
    it("empty Array", () => {
        assert.strictEqual(isEmpty([]), true);
    });
    it("empty Object", () => {
        assert.strictEqual(isEmpty({}), true);
    });
    it("not empty Array", () => {
        assert.strictEqual(isEmpty([1]), false);
    });
    it("not empty Object", () => {
        assert.strictEqual(isEmpty({p: 1}), false);
    });
});
