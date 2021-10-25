
const validation = ( (plateauMaxCoordinates, roverInstruction) => {

    let ErrorMessage = "";
    // Coordinates validation 
    if (plateauMaxCoordinates.plateauX < 0 || 
        plateauMaxCoordinates.plateauY < 0  ){
        ErrorMessage = "invalid plateau coordinate";
    }
    // instruction validation
    [...roverInstruction].forEach((instruction) => {
      if (instruction != 'L' && instruction != 'R' && instruction != 'M'){
        ErrorMessage = "invalid rover instruction";
      }
    })

    return ErrorMessage ;

});


module.exports = validation;