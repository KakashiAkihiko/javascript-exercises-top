const leapYears = function(numIsLeap) {

    if(numIsLeap % 4 === 0){
        if(numIsLeap % 100 !== 0){
            return true;
        }else if(numIsLeap % 400 === 0){
            return true;
        }
    }
    return false;

};

// Do not edit below this line
module.exports = leapYears;