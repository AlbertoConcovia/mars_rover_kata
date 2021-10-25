const validation = require("./validation");
const getNewRoverPosition = require("./Position");

const mars_rover = (setMarsRoverInstructions) => {
  const outputRoversPosition = [];

  // Iterate for each Rover
  setMarsRoverInstructions.roverSetInstructions.forEach((e) => {

    let currentErrorMessage = validation(
      setMarsRoverInstructions.plateauMaxCoordinates,
      e.roverInstruction
    );

    if (currentErrorMessage != "") {
      e.roverPosition.roverX = 0;
      e.roverPosition.roverY = 0;
      e.roverPosition.roverOrientation = "";
    } else {
      [...e.roverInstruction].forEach((instruction) => {
        e.roverPosition = getNewRoverPosition( instruction, setMarsRoverInstructions.plateauMaxCoordinates, e.roverPosition);
      });
    }
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

module.exports = mars_rover;
