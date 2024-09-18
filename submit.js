function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || income < expenses){
        return "Invalid Input";
    }

    const difference = income - expenses;
    const tax = difference * .20;

    return tax;
}


function sendNotification(email) {
    if(!email.includes('@')){
        return "Invalid Email";
    }

    const letter = email.split('@');

    const result = letter[0] + ' ' +  'sent you an email from' + ' ' + letter[1];

    return result;
}


function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return "Invalid Input";
    }

    for(let i = 0; i < name.length; i++){
        if (!isNaN(name[i])) {
            return true;
        }
    }

    return false;
}


function calculateFinalScore(obj) {
    if(typeof obj !== "object"){
        return "Invalid Input";
    }

    let totalScore = obj.testScore + obj.schoolGrade;
    
    let isFFamilyExtra = 20;
    if(obj.isFFamily){
        totalScore = totalScore + isFFamilyExtra;
    }

    if(totalScore >= 80){
        return true;
    }
    else{
        return false;
    }
}


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

    const waiting = roundedAvg * waitingList;

    return waiting;
}