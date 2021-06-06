import {assert} from "chai";
import isFunction from "@/isFunction";

describe("@jwn-js/isFunction", () => {
    const fn = function() {

        return;
    };
    const asyncFn = async function() {

        return;
    }

    const pr = function()  {
        this.name = "fn";
    }
    // @ts-ignore
    const obj = new pr();

    it("is Function", () => {
        assert.strictEqual(isFunction(fn), true);
    });
    it("is async Function", () => {
        assert.strictEqual(isFunction(asyncFn), true);
    });
    it("is constructor", () => {
        assert.strictEqual(isFunction(pr), true);
    });
    it("is object", () => {
        assert.strictEqual(isFunction(obj), false);
    });
});
