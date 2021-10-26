// Mars Rover test - validation testing

const validation = require("../src/validation");

describe("Mars Rover - validation test", () => {

  test("Test 1 validation - Given invalid input - then return output error ", () => {
    // Arrange
    const roverInstruction = "X";
    const result = "invalid rover instruction";
    // Act
    const errorMessage = validation(roverInstruction);
    // Assert
    expect(errorMessage).toStrictEqual(result);
  });

});