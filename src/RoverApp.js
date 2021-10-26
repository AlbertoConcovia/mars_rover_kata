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
      // instruction validation
      // let ErrorMessage = validation(e.roverInstruction);

      // Call rover
      // if (currentErrorMessage === "") 
      const outputRover = rover(e.roverInstruction, plateau, e.roverPosition);
      let errorMessage = outputRover.roverErrorMessage;

      // output format
      const objFinalRoverPosition = {
        outputRoverX: e.roverPosition.roverX,
        outoutRoverY: e.roverPosition.roverY,
        outputRoverOrientation: e.roverPosition.roverOrientation,
        outputErrorMessage: errorMessage,
      };
      outputRoversPosition.push(objFinalRoverPosition);
    });
  }
  return outputRoversPosition;
};

module.exports = roversApp;
