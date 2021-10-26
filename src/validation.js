
const validation = ( (roverInstruction) => {

    let ErrorMessage = "";
    // instruction validation
    [...roverInstruction].forEach((instruction) => {
      if (instruction != 'L' && instruction != 'R' && instruction != 'M'){
        ErrorMessage = "invalid rover instruction";
      }
    })

    return ErrorMessage ;

});


module.exports = validation;