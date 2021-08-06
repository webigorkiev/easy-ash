import {expect} from "chai";

import {uuid4, uuid4Valid} from "@/uuid4";

describe("@jwn-js/uuid4", () => {

    it(`uuid4`, () => {
        const uuid = uuid4();
        expect(uuid4Valid(uuid)).to.eql(true);
    });
});
