import {assert} from "chai";
import isObject from "@/isObject";

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
    const arr = [1];

    it("Function is not object", () => {
        assert.strictEqual(isObject(fn), false);
    });
    it("async Function is not object", () => {
        assert.strictEqual(isObject(asyncFn), false);
    });
    it("constructor is not object", () => {
        assert.strictEqual(isObject(pr), false);
    });
    it("Array is not object", () => {
        assert.strictEqual(isObject(arr), false);
    });
    it("null is not object", () => {
        assert.strictEqual(isObject(arr), false);
    });
    it("is object", () => {
        assert.strictEqual(isObject(obj), true);
    });
});
