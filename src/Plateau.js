
let plateauUpperEdgeX = 0;
let plateauUpperEdgeY = 0;

const setPlateauMaxCoordinates =  (plateauMaxCoordinates) => ( {

  plateauUpperEdgeX: plateauMaxCoordinates.plateauX,
  plateauUpperEdgeY: plateauMaxCoordinates.plateauY

} ) ;

module.exports = setPlateauMaxCoordinates;
