function calculateTax(income, expenses) {
    if(income < 0 || expenses < 0 || income < expenses){
        return "Invalid Input";
    }

    const difference = income - expenses;
    const tax = difference * .20;

    return tax;
}

// const result = calculateTax(10000, 3000);
// const result = calculateTax(34000, 1753);
// const result = calculateTax(5000, 1500);
// const result = calculateTax(7000, 7000);
// const result = calculateTax(-5000, 2000);
// const result = calculateTax(6000, -1500);
// const result = calculateTax(6000, 7000);
const x = 10000;
const y = 3000;
const result = calculateTax(x, y);
console.log(result);