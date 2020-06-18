import assert from "assert";
import {getObjectValue, getObjectJoin} from "../src/tables/helpers/objectValue";
import {findNearest} from "../src/tables/helpers/pagingCalc";

const testObject = {
    firstName:"jim",
    lastName:"bob",
    location: {
        address1: "123 red neck ville",
        zipCode: "12399",
        mailBox: {
            color: "green",
            height: 3.4,
            bolts: null
        }
    }
};

describe("get values from object", () =>{
    it("get first level objects", () =>{
        const first = getObjectValue(testObject, "firstName");
        const last = getObjectValue(testObject, "lastName");
        assert.strictEqual(last, "bob");
        assert.strictEqual(first, "jim");
    });

    it("second level object value", () => {
        const address = getObjectValue(testObject, "location.address1");
        const zip = getObjectValue(testObject, "location.zipCode");
        assert.strictEqual(address, "123 red neck ville");
        assert.strictEqual(zip, "12399");
    });

    it("third level object value", () => {
        const color = getObjectValue(testObject, "location.mailBox.color");
        const height = getObjectValue(testObject, "location.mailBox.height");
        assert.strictEqual(color, "green");
        assert.strictEqual(height, 3.4);
    });
});


describe("get join from object", () =>{
    it("get values from good object", () => {
        const result = getObjectJoin(testObject);
        assert.strictEqual(result, "jim,bob,123 red neck ville,12399,green,3.4,");
    });

    it("pass null", () => {
        const result = getObjectJoin(null);
        assert.strictEqual(result, "");
    });
});

describe("find nearest",()=> {
   it("number in range", ()=>{
       let value = findNearest([5,10,25], 15);
       assert.strictEqual(value,10, "nearest is ten");

       value = findNearest([5,10,30], 20);
       assert.strictEqual(value,10, "nearest is ten with 10 and 30");

       value = findNearest([5,10,30], 1);
       assert.strictEqual(value,5, "nearest is 5");
   });

    it("number out of range", ()=>{
        let value = findNearest([5,10,25], 30);
        assert.strictEqual(value,25, "nearest is 25");

        value = findNearest([5,10,30], -20);
        assert.strictEqual(value,5, "nearest is 5");

        value = findNearest([5,10,30], 0);
        assert.strictEqual(value,5, "nearest is 5 with zero target");
    });

    it("not numbers", ()=>{
        let value = findNearest([5,10,25], null);
        assert.strictEqual(value,5, "nearest is 5");

        value = findNearest([5,10,30], undefined);
        assert.strictEqual(value,5, "nearest is 5 of undefined");

        value = findNearest([5,10,30], "test");
        assert.strictEqual(value,5, "nearest is 5 of string");
    });
});
