# JavaScript Practice - Mars Rover 

### Preconditions and Assumptions:

    - I validate the instructions of each robot before processing it. 
    If it detects an error in the instructions, it does not process it,
    records an error message and continues reading the next robot.
    
    - An error field was added in each output.


### to Install:

    Clone the repo locally 

    After cloning this repository:
        npm install


### Process : 
    roverApp.js  
        --> set Plateau
            --> validate coordinates
        --> for Each roverSetInstructions call "rover.js"
            --> set init position
            --> validate instructions
            --> for Each instruction 'L', 'R', 'M', 
                call "getNewRoverPosition" into "position.js" to get the new position.
                --> getNewRoverPosition updates new orientation and coordinates.

### Files : src/
    roverApp.js 
        --> plateau.js
        --> rover.js   
            --> position.js 
            --> orientation.js


### Test : test/

    First Change "test": "jest" in the package.json.

    Second To run **ONE** test file at a time you can enter into the terminal 
    "npm test" followed by the file extension:

    "npm test"

### Testing files
    roverApp.test.js
    rover.test.js
    plateau.test.js
    orientation.test.js
    position.test.js 
    


