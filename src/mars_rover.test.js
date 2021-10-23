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
        outputRoverOrientation: "N" 
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
        outputRoverOrientation: "N" 
      },  
      { 
        outputRoverX: 5, 
        outoutRoverY: 1, 
        outputRoverOrientation: "E" 
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
        outputRoverOrientation: "E" 
      }
    ];
    // Act
    const roverFinalPosition = mars_rover(setMarsRoverInstructions);
    // Assert
    expect(roverFinalPosition).toStrictEqual(result);
  });




  // test invalid letters and coordinates

  // any input via a console application; supplying input via a file etc

  // Code design and clean and well-tested.

  // good unit test coverage and all unit tests passing

  // descriptive README key features of your solution, assumptions, approaches and future.

  // Plateau is rectangular, be extended and other shaped
    
  // Plateau support other vehicles and not just Rovers

  // Please attach a link to your GitHub repository containing your final Mars Rover Kata code solution.

});
