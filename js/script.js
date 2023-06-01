console.log('JS OK')


/**************************************************/
/**               ESERCIZIO EMAIL                **/
/**************************************************/

// *PHASE 1
// Create array & variables
const mailList = ['pistone@bikermice.it', 'sterzo@bikermice.it', 'turbo@bikermice.it'];
const emailButton = document.getElementById('email-btn');

// Link to DOM element
const emailElement = document.getElementById('email-result');
const emailCard = document.getElementById('email-card');

// *PHASE 2
// Activate cicle at click
emailButton.addEventListener('click', function () {

    // Validation variable
    let isValid = false;

    // Ask user's email
    const userInput = document.getElementById('user-input').value;
    console.log(userInput);

    // FOR cicle 
    for (let i = 0; i < mailList.length && !isValid; i++) {
        if (userInput === mailList[i]) {
            isValid = true;
        }
    }

    const messageResult = isValid ? 'Sei presente nei nostri sistemi!' : 'Non puoi accedere!';

    // Display Element in DOM
    emailCard.classList.remove('d-none');

    // Display result into element
    emailElement.innerText = messageResult;


})






/**************************************************/
/**                ESERCIZIO DADI                **/
/**************************************************/
// Create Arrays 
let numbersGeneratedUser = [];
let numbersGeneratedCPU = [];
const diceButton = document.getElementById('dice-btn');

// Link to DOM element
const diceElement = document.getElementById('dice-result');
const diceCard = document.getElementById('dice-card');
const cpuScore = document.getElementById('cpu-score');
const userScore = document.getElementById('user-score');

// Create variables
let sumUser = 0;
let sumCPU = 0;
let diceResult;

diceButton.addEventListener('click', function () {
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
        diceResult = 'Hai vinto!';
    } else {
        console.log('Ha vinto la CPU!');
        diceResult = 'Ha vinto la CPU!';
    }

    // Display Dice Element
    diceCard.classList.remove('d-none');

    // Display result into element
    diceElement.innerText = diceResult;
    cpuScore.innerText = 'La CPU ha totalizzato: ' + sumCPU + ' punti';
    userScore.innerText = 'Hai totalizzato: ' + sumUser + ' punti';

    // Erase all, ready for new click
    numbersGeneratedUser = [];
    sumUser = 0;
    numbersGeneratedCPU = [];
    sumCPU = 0;
})