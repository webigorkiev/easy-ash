import {assert} from "chai";

import debounce from "@/debounce";

describe("@jwn-js/debounce", () => {
    it("debounce count of execute", async() => {
        let i = 0;

        const func = debounce(() => {
            i++;
        }, 10);

        func();
        func();

        assert.strictEqual(i, 0);

        return new Promise(resolve => {
            setTimeout(() => {
                assert.strictEqual(i, 1);

                resolve();
            }, 20);
        });
    });
});
