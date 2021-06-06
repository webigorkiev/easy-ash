import {expect} from "chai";

import clean from "@/clean";

describe("@jwn-js/clean", () => {

    describe("clean default", () => {
        it("[1,2,undefind] => [1,2]", () => {
            const value = clean([1,2,undefined]);
            expect(value).to.eql([1,2]);
        });
        it("{p:1, o: undefined} => {p:1}", () => {
            const value = clean({p:1, o: undefined});
            expect(value).to.eql({p: 1});
        });
        it("{p:[1,2,3,'',null,undefined]} => {p:[1,2,3]}", () => {
            const value = clean({p:[1,2,3,'',null,undefined]});
            expect(value).to.eql({p:[1,2,3]});
        })
    });
    describe("clean only undefind", () => {
        it("[1,2,undefind] => [1,2]", () => {
            const value = clean([1,2,undefined], [undefined]);
            expect(value).to.eql([1,2]);
        });
        it("{p:1, o: undefined} => {p:1}", () => {
            const value = clean({p:1, o: undefined}, [undefined]);
            expect(value).to.eql({p: 1});
        });
        it("{p:[1,2,3,'',null,undefined]} => {p:[1,2,3,'',null]}", () => {
            const value = clean({p:[1,2,3,'',null,undefined]}, [undefined]);
            expect(value).to.eql({p:[1,2,3,'',null]});
        })
    });
})