window.

describe("randParts() no same numbers", () => {
    randPartsTest(300);
    randPartsTest(10000);
    randPartsTest(10);
    randPartsTest(0);
});

describe("fillArray function", () => {

    it("array filled with 10 integers", function() {
      assert.equal(fillArrays(10).length, 10);
    });
    
    it("array filled with 300 integers", function() {
        assert.equal(fillArrays(300).length, 300);
    });

    it("array filled with -1 integers = err (fail)", function() {
        expect(fillArrays(-1)).to.eql(["This is not a valid number."]);
    }); 
  
  });

function randPartsTest (num) {
    participants = num;
    let givers = fillArrays(participants);
    let receivers = fillArrays(participants);
    let testParts = randParts(givers, receivers);

    it("No numbers match each other given " + participants + " participants.", () => {
        testGivers = testParts.map(x => x.split('@')[0]);
        testReceivers = testParts.map(x => x.split('@')[1]);
        expect(testGivers).to.not.eql(testReceivers);
    });
}