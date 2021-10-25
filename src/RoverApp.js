const rover = require("./rover");
const validation = require("./validation");
const setRoverPosition = require("./position");
const setPlateauMaxCoordinates = require("./plateau");

const roversApp = (setMarsRoverInstructions) => {
  const outputRoversPosition = [];

  // setting Plateau Limits
  const plateau = setPlateauMaxCoordinates(setMarsRoverInstructions.plateauMaxCoordinates);
  
  // Iterate each roverSetInstructions
  setMarsRoverInstructions.roverSetInstructions.forEach((e) => {

    let currentErrorMessage = validation(
      setMarsRoverInstructions.plateauMaxCoordinates,
      e.roverInstruction
    );
    
    // if not error then call rover
    if (currentErrorMessage === "") {
      rover(e.roverInstruction, plateau, e.roverPosition);
    };

    // output format
    const objFinalRoverPosition = {
      outputRoverX: e.roverPosition.roverX,
      outoutRoverY: e.roverPosition.roverY,
      outputRoverOrientation: e.roverPosition.roverOrientation,
      outputErrorMessage: currentErrorMessage,
    };
    outputRoversPosition.push(objFinalRoverPosition);
  });
  return outputRoversPosition;
};

module.exports = roversApp;
