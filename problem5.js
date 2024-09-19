function waitingTime(waitingTimes, serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number'){
        return "Invalid Input"
    }
    
    let sum = 0;
    for(const time of waitingTimes){
        sum = sum + time;
    }

    const avg = sum / waitingTimes.length;

    const roundedAvg = Math.round(avg);

    const waitingList = serialNumber - waitingTimes.length - 1;

    const waitingTime = roundedAvg * waitingList;

    return waitingTime;
}

// const result = waitingTime([ 3, 5, 7, 11, 6 ], 10);
// const result = waitingTime([13, 2], 6);
// const result = waitingTime([13, 2, 6, 7, 10], 6);
// const result = waitingTime([6], 4);
const result = waitingTime(7 , 10);
// const result = waitingTime("[6,2]", 9);
// const result = waitingTime([7, 8, 3, 4, 5], "9");
// const result = waitingTime([7, 8, 3, 4, 5], "9");
console.log(result);
