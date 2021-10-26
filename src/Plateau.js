
let ErrorMessage = "";

const setPlateauMaxCoordinates =  ({plateauX, plateauY}) => {
  
  // Coordinates validation 
  if (plateauX < 0 ||  plateauY < 0  ){
      ErrorMessage = "invalid plateau coordinates";
  }

  return {
    plateauUpperEdgeX: plateauX ,
    plateauUpperEdgeY: plateauY ,
    plateauLowerEdgeX: 0,
    plateauLowerEdgeY: 0,
    plateauUpperErrorMessage: ErrorMessage
  }

} ;

module.exports = setPlateauMaxCoordinates;
