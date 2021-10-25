const Rover = require("./Rover");
const validation = require("./validation");
const getNewRoverPosition = require("./Position");
const setRoverPosition = require("./Position");
const setPlateauMaxCoordinates = require("./Plateau");

const RoversApp = (setMarsRoverInstructions) => {
  const outputRoversPosition = [];

  // setting Plateau Limits
  const plateau = setPlateauMaxCoordinates(setMarsRoverInstructions.plateauMaxCoordinates);
  
  // Iterate each roverSetInstructions
  setMarsRoverInstructions.roverSetInstructions.forEach((e) => {

    let currentErrorMessage = validation(
      setMarsRoverInstructions.plateauMaxCoordinates,
      e.roverInstruction
    );
    
    if (currentErrorMessage === "") {
      Rover(e.roverInstruction, plateau, e.roverPosition);
    };

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

module.exports = RoversApp;
