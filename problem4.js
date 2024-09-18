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

// const person = { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }
// const person = { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }
// const person = "hello"
const person = { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }
const result = calculateFinalScore(person);
console.log(result);