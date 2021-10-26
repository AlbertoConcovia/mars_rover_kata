// rover
const getNewRoverPosition = require("./Position");

const outputRover = {
    newRoverPosition:{},
    roverErrorMessage:""
}

const Rover = (roverInstruction, plateau, roverPosition) => {

    outputRover.newRoverPosition = roverPosition;

    // instruction validation
    [...roverInstruction].forEach((instruction) => {
        if (instruction != 'L' && instruction != 'R' && instruction != 'M'){
            outputRover.roverErrorMessage = "invalid rover instruction";
        }
    })
    
    if (outputRover.roverErrorMessage === "") {
        // Iterare for each rover instruction - and return new rover position
        [...roverInstruction].forEach((instruction) => {
            outputRover.newRoverPosition = getNewRoverPosition(instruction, plateau, roverPosition);
        });
    }
    
    return outputRover;
}

module.exports = Rover;