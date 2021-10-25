// rover
const getNewRoverPosition = require("./Position");

const Rover = (roverInstruction, plateau, roverPosition) => {
    let newRoverPosition = roverPosition;
    // Iterare for each rover instruction - and return new rover position
    [...roverInstruction].forEach((instruction) => {
        newRoverPosition = getNewRoverPosition(instruction, plateau, roverPosition);
    });
    return newRoverPosition;
}

module.exports = Rover;