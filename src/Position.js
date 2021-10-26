// return new rover position
const getNewRoverOrientation = require("./orientation");

const  getNewRoverPosition = ( instruction, plateau, roverPosition) => {
  
  // L or R  -  then  get the Orientation
  if (instruction === "L" || instruction === "R") {
    roverPosition.roverOrientation = getNewRoverOrientation(instruction,roverPosition.roverOrientation);
  }
  
  // M - move foward - check edge and update the Position.
  if (instruction === "M") {
    if (roverPosition.roverOrientation === "N") {
      if (roverPosition.roverY < plateau.plateauUpperEdgeY) roverPosition.roverY += 1;
    }
    if (roverPosition.roverOrientation === "E") {
      if (roverPosition.roverX < plateau.plateauUpperEdgeX) roverPosition.roverX += 1;
    }
    if (roverPosition.roverOrientation === "S") {
      if (roverPosition.roverY > plateau.plateauLowerEdgeY) roverPosition.roverY -= 1;
    }
    if (roverPosition.roverOrientation === "W") {
      if (roverPosition.roverX > plateau.plateauLowerEdgeX) roverPosition.roverX -= 1;
    }
  }
  return roverPosition;
};

module.exports = getNewRoverPosition ;
