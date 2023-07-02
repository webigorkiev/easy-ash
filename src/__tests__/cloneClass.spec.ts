import cloneClass from "../cloneClass";

describe("@jwn-js/cloneDeep", () => {
    class Input {
        test: number = 1;

        getTest() : number {
            return this.test;
        }
    }
    const clone = cloneClass(Input);
    const obj = new clone();

    it("Execute method getTest frol cloned class instance", () => {
        assert.strictEqual(obj.getTest(), 1);
    });

    it("Create instance of Input class and change it`s prototype, then check clone obj", () => {

        const inputObj = new Input();
        inputObj.test = 2;
        assert.strictEqual(inputObj.getTest(), 2);
        assert.strictEqual(obj.getTest(), 1);
    });
});
