console.log('JS OK')


/**************************************************/
/**               ESERCIZIO EMAIL                **/
/**************************************************/

// *PHASE 1
// Create array & variables
const mailList = ['pistone@bikermice.it', 'sterzo@bikermice.it', 'turbo@bikermice.it'];
const emailButton = document.getElementById('email-btn');

// Validation variable
let isValid = '';

// *PHASE 2
// Activate cicle at click
emailButton.addEventListener('click', function () {

    // Ask user's email
    const userInput = document.getElementById('user-input').value;
    console.log(userInput);

    // FOR cicle 
    for (let i = 0; i < mailList.length; i++) {
        if (userInput === mailList[i]) {
            isValid = true;
        }
    }

    // Conditional Validation
    if (isValid) {
        console.log('Sei presente nei nostri sistemi!');
    } else console.log('Non puoi accedere!');
})



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
console.log(numbersGeneratedUser, numbersGeneratedCPU);

// Print result
console.log('Hai totalizzato: ' + sumUser + ' punti');
console.log('La CPU ha totalizzato: ' + sumCPU + ' punti');

// Verify which is higher
if (sumUser > sumCPU) {
    console.log('Hai vinto!');
} else {
    console.log('Ha vinto la CPU!');
}
