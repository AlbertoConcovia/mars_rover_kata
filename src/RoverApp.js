// Mars Rover

const rover = require("./rover");
const validation = require("./validation");
const setPlateauMaxCoordinates = require("./plateau");
  
const roversApp = ({plateauMaxCoordinates, roverSetInstructions}) => {
  const outputRoversPosition = [];

  // setting Plateau Limits and validate coordinates
  const plateau = setPlateauMaxCoordinates(plateauMaxCoordinates);
  
  // Iterate each roverSetInstructions
  roverSetInstructions.forEach((e) => {

    // input validation
    let currentErrorMessage = validation( e.roverInstruction);
   
    // Call rover
    if (currentErrorMessage === "") rover(e.roverInstruction, plateau, e.roverPosition);

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
