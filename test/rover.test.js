// Mars Rover test

const rover = require("../src/rover");

describe("Mars Rover - Move Around the Plateau test", () => {

  test("Test 1 - Given instructions to move - then return output successful ", () => {
    // Arrange
    const plateau= { plateauUpperEdgeX: 5, plateauUpperEdgeY: 5 };
    const roverPosition= { roverX: 1, roverY: 2, roverOrientation: "N" };
    const roverInstruction= "M";
    const result = { 
        roverX: 1, 
        roverY: 3, 
        roverOrientation: "N" ,
      };
    // Act
    const roverFinalPositions = rover(roverInstruction, plateau, roverPosition);
    // Assert
    expect(roverFinalPositions).toStrictEqual(result);
  });

});
