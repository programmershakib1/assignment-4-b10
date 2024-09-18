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

// const names = 'Raj123';
// const names = 'Suman';
// const names = 'Name2024';
// const names = '!@#';
// const names = ["Raj"];
const names = '!@#$%^&*()';
const result = checkDigitsInName(names);
console.log(result);