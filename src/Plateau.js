
let plateauUpperEdgeX = 0;
let plateauUpperEdgeY = 0;
let ErrorMessage = "";

const setPlateauMaxCoordinates =  ({plateauX, plateauY}) => {

  // Coordinates validation 
  if (plateauX < 0 ||  plateauY < 0  ){
      ErrorMessage = "invalid plateau coordinate";
  }

  return {
    plateauUpperEdgeX: plateauX ,
    plateauUpperEdgeY: plateauY ,
    plateauUpperErrorMessage: ErrorMessage
  }

} ;

module.exports = setPlateauMaxCoordinates;
