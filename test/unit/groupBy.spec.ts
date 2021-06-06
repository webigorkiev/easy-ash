import {expect} from "chai";

import groupBy from "@/groupBy";

describe("@jwn-js/groupBy", () => {
    it(`groupBy([6.1, 4.2, 6.3], Math.floor) => { '4': [4.2], '6': [6.1, 6.3] }`, () => {
        const value = groupBy([6.1, 4.2, 6.3], Math.floor);
        expect(value).to.eql({ '4': [4.2], '6': [6.1, 6.3] });
    });
    it(`[{name: "a", value: 1}, {name: "a", value: 2}] grouping by name`, () => {
        const value = groupBy([{name: "a", value: 1}, {name: "a", value: 2}], v => v.name);
        expect(value).to.eql({"a":[{name: "a", value: 1}, {name: "a", value: 2}]});
    });
});
