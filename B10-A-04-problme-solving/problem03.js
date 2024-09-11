function checkDigitsInName(name) {
    let count = 0;
    if(typeof name !== 'string'){
        return 'Invalid Input';
    }
    else{
        for(let i of name){
            if(isNaN(parseInt(i)) === false){
                count++;
            }
        }
        return count > 0 ? true : false;
    }
}
console.log(checkDigitsInName('Raj123'));
console.log(checkDigitsInName('n9ayeem'));
console.log(checkDigitsInName('e1mu3'));
console.log(checkDigitsInName('Suman'));
console.log(checkDigitsInName('Name2024'));
console.log(checkDigitsInName('!@#'));
console.log(checkDigitsInName(["Raj"]));
console.log(checkDigitsInName('Raj@!#2324'));
