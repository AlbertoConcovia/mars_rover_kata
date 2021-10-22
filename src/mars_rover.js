const mars_rover = (setMarsRoverInstructions) => {
  const outputRoversPosition = [];

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

      // If instruction is M we update the Position
      if (instruction === "M") {
        if (currentRoverOrientation === "W") currentRoverPosition.roverX -= 1;
        if (currentRoverOrientation === "S") currentRoverPosition.roverY -= 1;
        if (currentRoverOrientation === "E") currentRoverPosition.roverX += 1;
        if (currentRoverOrientation === "N") currentRoverPosition.roverY += 1;
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
