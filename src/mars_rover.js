const mars_rover = (setMarsRoverInstructions) => {
  const outputRoversPosition = [];
  
  // Plateau Edge
  const plateauUpperEdgeX = setMarsRoverInstructions.plateauMaxCoordinates.plateauX;
  const plateauUpperEdgeY = setMarsRoverInstructions.plateauMaxCoordinates.plateauY;
  const plateauLowerEdgeX = 0;
  const plateauLowerEdgeY = 0;
  
  // Iterate for each Rover
  setMarsRoverInstructions.roverSetInstructions.forEach((e) => {
    let currentRoverOrientation = e.roverPosition.roverOrientation;
    let currentRoverPosition = e.roverPosition;

    // iterate each instruction
    [...e.roverInstruction].forEach((instruction) => {

      // If instruction is L or R we update the Orientation
      if (instruction === "L" || instruction === "R") {
        if (instruction === "L") {
          switch (currentRoverOrientation) {
            case "W":
              currentRoverOrientation = "S";
              break;
            case "S":
              currentRoverOrientation = "E";
              break;
            case "E":
              currentRoverOrientation = "N";
              break;
            case "N":
              currentRoverOrientation = "W";
              break;
            default:
              break;
          }
        }

        if (instruction === "R") {
          switch (currentRoverOrientation) {
            case "W":
              currentRoverOrientation = "N";
              break;
            case "S":
              currentRoverOrientation = "W";
              break;
            case "E":
              currentRoverOrientation = "S";
              break;
            case "N":
              currentRoverOrientation = "E";
              break;
            default:
              break;
          }
        }
      }

      // If M move foward - check edge and update the Position.
      if (instruction === "M") {
        if (currentRoverOrientation === "N") {
          if (currentRoverPosition.roverY < plateauUpperEdgeY) currentRoverPosition.roverY += 1;
        }
        if (currentRoverOrientation === "E") {
          if (currentRoverPosition.roverX < plateauUpperEdgeX) currentRoverPosition.roverX += 1;
        }
        if (currentRoverOrientation === "S") {
          if (currentRoverPosition.roverY > plateauLowerEdgeY) currentRoverPosition.roverY -= 1;
        }
        if (currentRoverOrientation === "W") {
          if (currentRoverPosition.roverX > plateauLowerEdgeX) currentRoverPosition.roverX -= 1;
        }
      }
    });

    const objFinalRoverPosition = {
      outputRoverX: currentRoverPosition.roverX,
      outoutRoverY: currentRoverPosition.roverY,
      outputRoverOrientation: currentRoverOrientation,
    };
    outputRoversPosition.push(objFinalRoverPosition);
  });

  return outputRoversPosition;
};

module.exports = mars_rover;
