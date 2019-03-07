describe("randParts no same numbers", () => {
    randPartsTest(300);
    randPartsTest(10000);
    randPartsTest(10);
});

describe("inspect randPartsTest logic. arr1 should equal arr2", () => {
    it("Inspect Test logic; arr1 should equal arr2", () => {
        arr1 = [1,2,3];
        arr2 = [1,2,3];
        expect(arr1).to.eql(arr2);
    });
})

describe("fillArray function", () => {

    it("array filled with 10 integers", function() {
      assert.equal(fillArrays(10).length, 10);
    });
    
    it("array filled with 300 integers", function() {
        assert.equal(fillArrays(300).length, 300);
    });

    it("array filled with -1 integers = 'This is not a valid number.' (fail)", function() {
        expect(fillArrays(-1)).to.eql(["This is not a valid number."]);
    }); 
  
  });

function randPartsTest (num) {
    participants = num;
    let givers = fillArrays(participants);
    let receivers = fillArrays(participants);
    let testParts = randParts(givers, receivers);

    it("No numbers match each other given " + participants + " participants.", () => {
        dataMatch = splitReturn(testParts);
        expect(dataMatch[0]).to.not.eql(dataMatch[1]);
    });
}