import isClass from "../isClass";

describe("@jwn-js/chunks", () => {
    class Test {
    }
    const testObj = new Test();
    const array: Array<[]> = [];
    const nl = null;
    const Testes5 = function() {
        this.name = "Testes5";
    }

    it("is class for class", () => {
        assert.strictEqual(isClass(Test), true);
    });
    it("is es5 class not class", () => {
        assert.strictEqual(isClass(Testes5), true);
    });
    it("Object is not class", () => {
        assert.strictEqual(isClass(testObj), false);
    });
    it("Array is not class", () => {
        assert.strictEqual(isClass(array), false);
    });
    it("null is not class", () => {
        assert.strictEqual(isClass(nl), false);
    });
});
