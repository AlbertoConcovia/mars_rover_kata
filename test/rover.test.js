// Mars Rover test

const rover = require("../src/rover");

describe("Mars Rover - Move Around the Plateau test", () => {

  test("Rover - Test 1 - Given instructions to move - then return output successful ", () => {
    // Arrange
    const plateau = { plateauUpperEdgeX: 5, plateauUpperEdgeY: 5 };
    const roverPosition = { roverX: 1, roverY: 2, roverOrientation: "N" };
    const roverInstruction = "M";
    const result = {
      newRoverPosition: {
        roverX: 1,
        roverY: 3,
        roverOrientation: "N",
      },
      roverErrorMessage: "" 
    };
    // Act
    const roverFinalPositions = rover(roverInstruction, plateau, roverPosition);
    // Assert
    expect(roverFinalPositions).toStrictEqual(result);
  });

  // test invalid letters into instructions
  test("Rover - Test 2 - Given invalid instruccions then return error message", () => {
    // Arrange
    const plateau = { plateauUpperEdgeX: 5, plateauUpperEdgeY: 5 };
    const roverPosition = { 
      roverX: 1, 
      roverY: 2, 
      roverOrientation: "N"
    };
    const roverInstruction = "X";
    const result = {
      newRoverPosition: {
        roverX: 1,
        roverY: 2,
        roverOrientation: "N",
      },
      roverErrorMessage: "invalid rover instruction"
    };
    // Act
    const roverFinalPositions = rover(roverInstruction, plateau, roverPosition);
    // Assert
    expect(roverFinalPositions).toStrictEqual(result);
  });
});
