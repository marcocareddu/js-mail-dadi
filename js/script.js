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

