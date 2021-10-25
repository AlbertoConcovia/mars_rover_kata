const validation = require("./validation");
const getNewRoverOrientation = require("./getNewRoverOrientation");

const mars_rover = (setMarsRoverInstructions) => {
  const outputRoversPosition = [];
  // Plateau Edge
  const plateauUpperEdgeX = setMarsRoverInstructions.plateauMaxCoordinates.plateauX;
  const plateauUpperEdgeY = setMarsRoverInstructions.plateauMaxCoordinates.plateauY;
  const plateauLowerEdgeX = 0;
  const plateauLowerEdgeY = 0;
  let currentRoverOrientation = "";

  // Iterate for each Rover
  setMarsRoverInstructions.roverSetInstructions.forEach((e) => {
    let currentErrorMessage = "";
    currentRoverOrientation = e.roverPosition.roverOrientation;
    let currentRoverPosition = e.roverPosition;

    currentErrorMessage = validation(
      setMarsRoverInstructions.plateauMaxCoordinates,
      e.roverInstruction
    );

    if (currentErrorMessage != "") {
      currentRoverPosition.roverX = 0;
      currentRoverPosition.roverY = 0;
      currentRoverOrientation = "";
    } else {
      // iterate each instruction
      [...e.roverInstruction].forEach((instruction) => {
        
        // If instruction is L or R we update the Orientation
        if (instruction === "L" || instruction === "R") {
          currentRoverOrientation = getNewRoverOrientation(instruction, currentRoverOrientation);
        }

        // If M move foward - check edge and update the Position.
        if (instruction === "M") {
          if (currentRoverOrientation === "N") {
            if (currentRoverPosition.roverY < plateauUpperEdgeY)
              currentRoverPosition.roverY += 1;
          }
          if (currentRoverOrientation === "E") {
            if (currentRoverPosition.roverX < plateauUpperEdgeX)
              currentRoverPosition.roverX += 1;
          }
          if (currentRoverOrientation === "S") {
            if (currentRoverPosition.roverY > plateauLowerEdgeY)
              currentRoverPosition.roverY -= 1;
          }
          if (currentRoverOrientation === "W") {
            if (currentRoverPosition.roverX > plateauLowerEdgeX)
              currentRoverPosition.roverX -= 1;
          }
        }
      });
    }
    const objFinalRoverPosition = {
      outputRoverX: currentRoverPosition.roverX,
      outoutRoverY: currentRoverPosition.roverY,
      outputRoverOrientation: currentRoverOrientation,
      outputErrorMessage: currentErrorMessage,
    };
    outputRoversPosition.push(objFinalRoverPosition);
  });

  return outputRoversPosition;
};

module.exports = mars_rover;
