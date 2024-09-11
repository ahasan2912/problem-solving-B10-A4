
function calculateTax(income, expenses) {
    let total = 0;
    if(income < 0 || expenses < 0 || expenses > income){
        return 'Invalid Input';
    }
    else{
        total = ((income - expenses) * 20) / 100;
        return total;
    }
}
console.log(calculateTax(10000, 3000))
console.log(calculateTax(34000, 1753))
console.log(calculateTax(5000, 1500))
console.log(calculateTax(7000, 7000))
console.log(calculateTax(-5000, 2000))
console.log(calculateTax(6000, -1500))
console.log(calculateTax(600, 1500));
console.log(calculateTax(-7700, -1500));