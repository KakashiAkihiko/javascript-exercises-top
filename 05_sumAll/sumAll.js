const sumAll = function(numFloor, numCeiling) {


    //Check if Integer
    if( (!Number.isInteger(numFloor)) || (!Number.isInteger(numCeiling)) ){
        return "ERROR";
    }

    //Check if input is negative
    if(numFloor<0 || numCeiling<0){
        return "ERROR";
    }

    //Check input is in order of magnitude
    if(numCeiling<numFloor){
        let temp = numCeiling;
        numCeiling = numFloor;
        numFloor = temp;
    }

    let result = 0;
    //Iterate from the bottom number to top number adding the next num to current result every iteration
    for(let i=numFloor; i<numCeiling+1; i++){
        result += i;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
