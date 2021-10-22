const mars_rover = (setMarsRoverInstructions) => {
  // set initial rover position
  const currentRoverPosition =
    setMarsRoverInstructions.roverSetInstructions.roverPosition;
  let currentRoverOrientation =
    setMarsRoverInstructions.roverSetInstructions.roverPosition
      .roverOrientation;

  // read rover instructions and iterate each instruction
  [...setMarsRoverInstructions.roverSetInstructions.roverInstruction].forEach(
    (instruction) => {
      // If instruction is L or R we update the Orientation
      if (instruction === "L" || instruction === "R") {
        //roverX: 0, roverY: 2  O=S  instruction=M
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
      }

      // If instruction is M we update the Position
      if (instruction === "M") {
        if (currentRoverOrientation === "W") currentRoverPosition.roverX -= 1;
        if (currentRoverOrientation === "S") currentRoverPosition.roverY -= 1;
        if (currentRoverOrientation === "E") currentRoverPosition.roverX += 1;
        if (currentRoverOrientation === "N") currentRoverPosition.roverY += 1;
      }
    }
  );
  const finalArrayRoverPosition = [];
  finalArrayRoverPosition[0] = currentRoverPosition.roverX;
  finalArrayRoverPosition[1] = currentRoverPosition.roverY;
  finalArrayRoverPosition[2] = currentRoverOrientation;
  return finalArrayRoverPosition;
};

module.exports = mars_rover;
