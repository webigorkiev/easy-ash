import {assert, expect} from "chai";

import intersection from "@/intersection";

describe("@jwn-js/intersection", () => {
    it("[1,2,3,4], [1,3] => [1,3]", () => {
        const value = intersection([1,2,3,4], [1,3]);
        expect(value).to.eql([1,3]);
    });
});
