// Mars Rover test - orientation testing

const getNewRoverOrientation = require("../src/orientation");

describe("Mars Rover - orientation test", () => {

  test("Test 1 Orientation - Given instructions L & orientation W - then return output successful ", () => {
    // Arrange
    const instruction = "L";
    const orientation = "W";
    const result = "S";
    // Act
    const roverFinalPositions = getNewRoverOrientation(instruction,orientation);
    // Assert
    expect(roverFinalPositions).toStrictEqual(result);
  });

});