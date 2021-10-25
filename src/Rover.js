const getNewRoverPosition = require("./Position");

const Rover = (roverInstruction, plateau, roverPosition) => {

    let newRoverPosition = roverPosition;

    [...roverInstruction].forEach((instruction) => {
        newRoverPosition = getNewRoverPosition(instruction, plateau, roverPosition);
    });

    return newRoverPosition;
}

module.exports = Rover;