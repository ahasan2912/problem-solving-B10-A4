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


function sendNotification(email) {
    const newArray = email.split('@');
    let str = '';
    if(email.includes('@') === false){
        return 'Invalid Email';
    }
    else{
        str = newArray[0] + ' sent you an email from ' + newArray[newArray.length-1];
        return str;
    }
}


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


function calculateFinalScore(obj) {
    if (typeof obj === 'object' && Array.isArray(obj) === false) {
        let total = 0;
        if (obj.isFFamily === true) {
            total += obj.testScore + obj.schoolGrade + 20;
        }
        else {
            total += obj.testScore + obj.schoolGrade;
        }
        return total >= 80 ? true : false;
    }
    else {
        return 'Invalid Input';
    }
}


function waitingTime(waitingTimes, serialNumber) {
    let len = waitingTimes.length;
    if(Array.isArray(waitingTimes) === true && (typeof serialNumber === 'number' && isNaN(serialNumber) === false)){
        let avgTime, totalTime = 0;
        for(let time of waitingTimes){
            totalTime += time;
        }
        avgTime = Math.round((totalTime / len));
        return avgTime * ((serialNumber - 1) - len);
    }
    else{
        return 'Invalid Input';
    }
}
