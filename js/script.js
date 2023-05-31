console.log('JS OK')


/**************************************************/
/**               ESERCIZIO EMAIL                **/
/**************************************************/

// *PHASE 1
// Create array
const mailList = ['pistone@bikermice.it', 'sterzo@bikermice.it', 'turbo@bikermice.it'];

// Ask user's email
const userInput = prompt('Qual è la tua email?').trim();
let isValid = '';

// *PHASE 2
// FOR cicle 
for (let i = 0; i < mailList.length; i++) {
    console.log(mailList[i]);
    if (userInput === mailList[i]) {
        isValid = true;
    }
}

// Conditional Validation
if (isValid) {
    console.log('Sei presente nei nostri sistemi!');
} else console.log('Non puoi accedere!');



/**************************************************/
/**                ESERCIZIO DADI                **/
/**************************************************/
// Create Arrays 
const numbersGeneratedUser = [];
const numbersGeneratedCPU = [];

// Create variables
let sumUser = 0;
let sumCPU = 0;

// Generate 2 random numbers
for (let i = 0; i < 2; i++) {
    const randomUser = Math.floor(Math.random() * 50) + 1;
    const randomCPU = Math.floor(Math.random() * 50) + 1;
    numbersGeneratedUser.push(randomUser);
    numbersGeneratedCPU.push(randomCPU);
    // Sum random numbers
    sumUser += randomUser;
    sumCPU += randomCPU;
}
console.log(numbersGeneratedCPU, numbersGeneratedUser);
console.log(sumUser, sumCPU);