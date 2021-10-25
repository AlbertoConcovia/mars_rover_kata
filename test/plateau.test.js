// Mars Rover test - Plateau testing

const setPlateauMaxCoordinates = require("../src/plateau");

describe("Mars Rover - plateau test", () => {

  test("Test 1 plateau - Given coordinates to set - then return output successful ", () => {
    // Arrange
    const plateauMaxCoordinates = {
      plateauX : 2,
      plateauY: 3
    }
    const result = {
      plateauUpperEdgeX: 2,
      plateauUpperEdgeY: 3
    };
    // Act
    const plateauSetMaxCoordinates = setPlateauMaxCoordinates(plateauMaxCoordinates);
    // Assert
    expect(plateauSetMaxCoordinates).toStrictEqual(result);
  });

});