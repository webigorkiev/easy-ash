import {assert} from "chai";

import isBrowser from "@/isBrowser";

describe("@jwn-js/isBrowser", () => {
    it("Execute in node.js equipment", () => {
        assert.strictEqual(isBrowser(), false);
    });
});
