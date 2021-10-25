// return new rover orientation

const getNewRoverOrientation = (instruction, currentRoverOrientation) => {
  // If instruction is L or R - return the new Orientation.
  let newRoverOrientation = "";

  if (instruction === "L") {
    switch (currentRoverOrientation) {
      case "W":
        newRoverOrientation = "S";
        break;
      case "S":
        newRoverOrientation = "E";
        break;
      case "E":
        newRoverOrientation = "N";
        break;
      case "N":
        newRoverOrientation = "W";
        break;
      default:
        break;
    }
  }

  if (instruction === "R") {
    switch (currentRoverOrientation) {
      case "W":
        newRoverOrientation = "N";
        break;
      case "S":
        newRoverOrientation = "W";
        break;
      case "E":
        newRoverOrientation = "S";
        break;
      case "N":
        newRoverOrientation = "E";
        break;
      default:
        break;
    }
  }

  return newRoverOrientation;
};

module.exports = getNewRoverOrientation;
