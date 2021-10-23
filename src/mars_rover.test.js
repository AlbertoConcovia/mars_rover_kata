// Mars Rover test

const mars_rover = require("../src/mars_rover");

describe("Mars Rover - Move Around the Plateau test", () => {
  test("Test 1 - Given instructions to move - then return output successful ", () => {
    // Arrange
    const setMarsRoverInstructions = {
      plateauMaxCoordinates: { plateauX: 5, plateauY: 5 },
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
    const roverFinalPosition = mars_rover(setMarsRoverInstructions);
    // Assert
    expect(roverFinalPosition).toStrictEqual(result);
  });

  test("Test 2 - Given instructions to move 2 Rovers - then return output successful ", () => {
    // Arrange
    const setMarsRoverInstructions = {
      plateauMaxCoordinates: { plateauX: 5, plateauY: 5 },
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
    const roverFinalPosition = mars_rover(setMarsRoverInstructions);
    // Assert
    expect(roverFinalPosition).toStrictEqual(result);
  });

  // test Plateau edge limit 5 5 
  test("Test 3 - Given coordinates that exceed the Plateau edge, then does not allow to exceed the edge", () => {
    // Arrange
    const setMarsRoverInstructions = {
      plateauMaxCoordinates: { plateauX: 5, plateauY: 5 },
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
    const roverFinalPosition = mars_rover(setMarsRoverInstructions);
    // Assert
    expect(roverFinalPosition).toStrictEqual(result);
  });

  // test invalid letters into instructions
  test("Test 4 - Given invalid instruccions then return error message", () => {
    // Arrange
    const setMarsRoverInstructions = {
      plateauMaxCoordinates: { plateauX: 5, plateauY: 5 },
      roverSetInstructions: [
        {
          roverPosition: { roverX: 1, roverY: 4, roverOrientation: "N" },
          roverInstruction: "X",
        },
        {
          roverPosition: { roverX: 1, roverY: 2, roverOrientation: "N" },
          roverInstruction: "LMLMLMLMM",
        }
      ],
    };
    const result = [
      { 
        outputRoverX: 0, 
        outoutRoverY: 0, 
        outputRoverOrientation: "" ,
        outputErrorMessage : "invalid rover instruction"
      },
      { 
        outputRoverX: 1, 
        outoutRoverY: 3, 
        outputRoverOrientation: "N"  ,
        outputErrorMessage: ""
      }
    ];
    // Act
    const roverFinalPosition = mars_rover(setMarsRoverInstructions);
    // Assert
    expect(roverFinalPosition).toStrictEqual(result);
  });

  // refactoring instruction validation - add method include or other - only this letters('L','R','M')

  // module.export
  
  // input via file

  // Code design and clean and well-tested.

  // Plateau is rectangular, be extended and other shaped
  
  // Plateau support other vehicles and not just Rovers
  
  // descriptive README key features solution, assumptions and future.

  // Please attach a link to your GitHub repository 

});
