import {assert} from "chai";

import throttle from "@/throttle";

describe("@jwn-js/throttle", () => {
    it("throttle count of execute", async() => {
        let i = 0;

        const func = throttle(() => {
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
