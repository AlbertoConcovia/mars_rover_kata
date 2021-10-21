// Mars Rover test

// Lines of Input to the Program:
// 5 5
// 1 2 N
// LMLMLMLMM
// 3 3 E
// MMRMMRMRRM

// Expected Output:
// 1 3 N
// 5 1 E

const mars_rover = require("../src/mars_rover");

describe("Mars Rover - Move Around the Plateau test", () => {
  test("Given instructions to move - then return output successful ", () => {

    // Arrange
    const coordinatesPlateau = { x: 5, y: 5 };
    const roverSetInstructions = [ [1, 2, "N"],["LMLMLMLMM"]]
    const result = [1, 3, "N"];

    // Act
    const roverFinalPosition = mars_rover(coordinatesPlateau, roverSetInstructions);

    // Assert
    expect(roverFinalPosition).toStrictEqual(result);
  });
});
