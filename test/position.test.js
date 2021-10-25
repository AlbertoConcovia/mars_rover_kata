// Mars Rover test - position testing

const getNewRoverPosition = require("../src/position");

describe("Mars Rover - position test", () => {

  test("Test 1 position - Given position - then return output successful ", () => {
    // Arrange
    const instruction = "L";
    const plateau = {
      plateauUpperEdgeX : 5 ,
      plateauUpperEdgeY : 5
    };
    const roverPosition = {
      roverX:5,
      roverY:5,
      roverOrientation:"N"
    };
    const result = {
      roverX:5,
      roverY:5,
      roverOrientation:"W"
    };
    // Act
    const newPosition = getNewRoverPosition( instruction, plateau, roverPosition);
    // Assert
    expect(newPosition).toStrictEqual(result);
  });

});