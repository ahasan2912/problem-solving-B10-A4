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
console.log(calculateFinalScore({ 
    name: "Rajib", testScore: 45, schoolGrade: 25, 
    isFFamily: true }));
console.log(calculateFinalScore({
    name: "Rajib", testScore: 45, schoolGrade: 25,
    isFFamily: false
}));
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25,
    isFFamily : true }));
