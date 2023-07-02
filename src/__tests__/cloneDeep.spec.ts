import cloneDeep from "../cloneDeep";

describe("@jwn-js/cloneDeep", () => {
    const input = {p:1, o: {d:2, c: undefined}};
    const output = {p:1, o: {d:2, c: undefined}};
    const cloned = cloneDeep(input);

    it("output object same as input", () => {
        expect(cloned).to.eql(output);
    });

    // Change input object
    input.o.d = 3;

    it("change input not affect to cloned object", () => {
        expect(cloned).to.eql(output);
    });
});
