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

console.log(sendNotification('zihad.ph@gmail.com'));
console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com '));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));
