// Mars Rover
const rover = require("./rover");
const setPlateauMaxCoordinates = require("./plateau");

const roversApp = ({ plateauMaxCoordinates, roverSetInstructions }) => {
  const outputRoversPosition = [];

  // setting Plateau Limits and validate coordinates
  const plateau = setPlateauMaxCoordinates(plateauMaxCoordinates);
  let errorMessage = plateau.plateauUpperErrorMessage;
  
  // if the plateau coordinates are valid
  if (errorMessage === "") {

    // Iterate each roverSetInstructions
    roverSetInstructions.forEach((e) => {
      
      // Call rover
      const outputRover = rover(e.roverInstruction, plateau, e.roverPosition);
      let errorMessage = outputRover.roverErrorMessage;

      // output 
      const objFinalRoverPosition = {
        outputRoverX: outputRover.newRoverPosition.roverX,
        outoutRoverY: outputRover.newRoverPosition.roverY,
        outputRoverOrientation: outputRover.newRoverPosition.roverOrientation,
        outputErrorMessage: errorMessage,
      };
      outputRoversPosition.push(objFinalRoverPosition);

    });
  }
  return outputRoversPosition;
};

module.exports = roversApp;
