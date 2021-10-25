const getNewRoverOrientation = require("./Orientation");
let plateauUpperEdgeX = 0;
let plateauUpperEdgeY = 0;
const plateauLowerEdgeX = 0;
const plateauLowerEdgeY = 0;

const  getNewRoverPosition = ( instruction, plateau, roverPosition) => {
  plateauUpperEdgeX = plateau.plateauUpperEdgeX;
  plateauUpperEdgeY = plateau.plateauUpperEdgeY;
// If instruction is L or R we update the Orientation
  if (instruction === "L" || instruction === "R") {
    roverPosition.roverOrientation = getNewRoverOrientation(
      instruction,
      roverPosition.roverOrientation
    );
  }
  // If M move foward - check edge and update the Position.
  if (instruction === "M") {
    if (roverPosition.roverOrientation === "N") {
      if (roverPosition.roverY < plateauUpperEdgeY) roverPosition.roverY += 1;
    }
    if (roverPosition.roverOrientation === "E") {
      if (roverPosition.roverX < plateauUpperEdgeX) roverPosition.roverX += 1;
    }
    if (roverPosition.roverOrientation === "S") {
      if (roverPosition.roverY > plateauLowerEdgeY) roverPosition.roverY -= 1;
    }
    if (roverPosition.roverOrientation === "W") {
      if (roverPosition.roverX > plateauLowerEdgeX) roverPosition.roverX -= 1;
    }
  }
  return roverPosition;
};

module.exports = getNewRoverPosition ;
