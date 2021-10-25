const mars_rover = (setMarsRoverInstructions) => {
  const outputRoversPosition = [];
  
  // Plateau Edge
  const plateauUpperEdgeX = setMarsRoverInstructions.plateauMaxCoordinates.plateauX;
  const plateauUpperEdgeY = setMarsRoverInstructions.plateauMaxCoordinates.plateauY;
  const plateauLowerEdgeX = 0;
  const plateauLowerEdgeY = 0;
  
  // Iterate for each Rover
  setMarsRoverInstructions.roverSetInstructions.forEach((e) => {

    let currentErrorMessage =  "" ;
    let currentRoverOrientation = e.roverPosition.roverOrientation;
    let currentRoverPosition = e.roverPosition;

    // Coordinates validation 
    if (setMarsRoverInstructions.plateauMaxCoordinates.plateauX < 0 || 
        setMarsRoverInstructions.plateauMaxCoordinates.plateauY < 0  ){
      currentErrorMessage = "invalid plateau coordinate";
      currentRoverPosition.roverX = 0;
      currentRoverPosition.roverY = 0;
      currentRoverOrientation = "";
    }
    // instruction validation
    [...e.roverInstruction].forEach((instruction) => {
      if (instruction != 'L' && instruction != 'R' && instruction != 'M'){
        currentErrorMessage = "invalid rover instruction";
        currentRoverPosition.roverX = 0;
        currentRoverPosition.roverY = 0;
        currentRoverOrientation = "";
      }
    })
      
    if (currentErrorMessage === "") {
  
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

    }
    const objFinalRoverPosition = {
      outputRoverX: currentRoverPosition.roverX,
      outoutRoverY: currentRoverPosition.roverY,
      outputRoverOrientation: currentRoverOrientation,
      outputErrorMessage : currentErrorMessage,
    };
    outputRoversPosition.push(objFinalRoverPosition);
  });

  return outputRoversPosition;
};

module.exports = mars_rover;
