// Mars Rover test - Plateau testing

const setPlateauMaxCoordinates = require("../src/plateau");

describe("Mars Rover - plateau test", () => {

  test("plateau - Test 1 - Given coordinates to set - then return output successful ", () => {
    // Arrange
    const plateauMaxCoordinates = {
      plateauX : 2,
      plateauY: 3
    }
    const result = {
      plateauUpperEdgeX: 2 ,
      plateauUpperEdgeY: 3 ,
      plateauUpperErrorMessage: ""
    };
    // Act
    const plateauSetMaxCoordinates = setPlateauMaxCoordinates(plateauMaxCoordinates);
    // Assert
    expect(plateauSetMaxCoordinates).toStrictEqual(result);
  });

    
  // test invalid coordintes
  test("plateau -Test 2 - Given invalid negative coordinate then return error message", () => {
    // Arrange
    const plateauMaxCoordinates = {
      plateauX : -2,
      plateauY: 3
    }
    const result = {
      plateauUpperEdgeX: -2 ,
      plateauUpperEdgeY: 3 ,
      plateauUpperErrorMessage: "invalid plateau coordinate"
    };
    // Act
    const plateauSetMaxCoordinates = setPlateauMaxCoordinates(plateauMaxCoordinates);
    // Assert
    expect(plateauSetMaxCoordinates).toStrictEqual(result);
  });


});