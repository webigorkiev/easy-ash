import {expect} from "chai";

import difference from "@/difference";

describe("@jwn-js/difference", () => {
    it(`[1, "a", "bb"], ["a"] => [1, "bb"]`, () => {
        const value = difference([1, "a", "bb"], ["a"]);
        expect(value).to.eql([1, "bb"]);
    });
});
