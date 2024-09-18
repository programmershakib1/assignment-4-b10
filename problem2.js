function sendNotification(email) {
    if(!email.includes('@')){
        return "Invalid Email";
    }

    const letter = email.split('@');

    const result = letter[0] + ' ' +  'sent you an email from' + ' ' + letter[1];

    return result;
}

const test = 'zihad.ph@gail.com';
// const test = 'zihad@gmail.com';
// const test = 'farhan34@yahoo.com';
// const test = 'nadim.naem5@outlook.com';
// const test = 'fahim234.hotmail.com';
// const test = 'sadia8icloud.com';
const result = sendNotification(test);
console.log(result);