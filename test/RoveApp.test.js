// Mars Rover test

const RoversApp = require("../src/RoverApp");

describe("Mars Rover - Move Around the Plateau test", () => {

  const  plateauUpperRightCoordinates = { plateauX: 5, plateauY: 5 };
  
  test("Test 1 - Given instructions to move - then return output successful ", () => {
    // Arrange
    const setMarsRoverInstructions = {
      plateauMaxCoordinates: plateauUpperRightCoordinates,
      roverSetInstructions: [
        {
          roverPosition: { roverX: 1, roverY: 2, roverOrientation: "N" },
          roverInstruction: "LMLMLMLMM",
        },
      ]
    };
    const result = [
      { 
        outputRoverX: 1, 
        outoutRoverY: 3, 
        outputRoverOrientation: "N" ,
        outputErrorMessage: ""
      }
    ];
    // Act
    const roverFinalPositions = RoversApp(setMarsRoverInstructions);
    // Assert
    expect(roverFinalPositions).toStrictEqual(result);
  });

  test("Test 2 - Given instructions to move 2 Rovers - then return output successful ", () => {
    // Arrange
    const setMarsRoverInstructions = {
      plateauMaxCoordinates: plateauUpperRightCoordinates,
      roverSetInstructions: [
        {
          roverPosition: { roverX: 1, roverY: 2, roverOrientation: "N" },
          roverInstruction: "LMLMLMLMM",
        },
        {
          roverPosition: { roverX: 3, roverY: 3, roverOrientation: "E" },
          roverInstruction: "MMRMMRMRRM",
        },
      ],
    };
    const result = [
      { 
        outputRoverX: 1, 
        outoutRoverY: 3, 
        outputRoverOrientation: "N"  ,
        outputErrorMessage: ""
      },  
      { 
        outputRoverX: 5, 
        outoutRoverY: 1, 
        outputRoverOrientation: "E"  ,
        outputErrorMessage: ""
      }
    ];
    // Act
    const roverFinalPositions = RoversApp(setMarsRoverInstructions);
    // Assert
    expect(roverFinalPositions).toStrictEqual(result);
  });

  // Validation test - Plateau edge limit 5 5 
  test("Test 3 - Given coordinates that exceed the Plateau edge, then does not allow to exceed the edge", () => {
    // Arrange
    const setMarsRoverInstructions = {
      plateauMaxCoordinates: plateauUpperRightCoordinates,
      roverSetInstructions: [
        {
          roverPosition: { roverX: 1, roverY: 4, roverOrientation: "N" },
          roverInstruction: "MMMRMM",
        }
      ],
    };
    const result = [
      { 
        outputRoverX: 3, 
        outoutRoverY: 5, 
        outputRoverOrientation: "E"  ,
        outputErrorMessage: ""
      }
    ];
    // Act
    const roverFinalPositions = RoversApp(setMarsRoverInstructions);
    // Assert
    expect(roverFinalPositions).toStrictEqual(result);
  });

  
});
