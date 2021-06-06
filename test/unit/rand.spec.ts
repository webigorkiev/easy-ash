import {expect} from "chai";

import rand from "@/rand";

describe("@jwn-js/rand", () => {
    it(`rand gen number`, () => {
        const value = rand(10, 20);
        expect(value).to.be.a("number");
    });
    it(`gen rand number between 10, 20`, () => {
        const value = rand(10, 20);
        expect(value>=10 && value <=20).to.be.a.true;
    });
    it(`gen rand number between 10, 10 => 10`, () => {
        const value = rand(10, 10);
        expect(value).to.eql(10);
    });
});
