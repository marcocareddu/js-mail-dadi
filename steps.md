<!-- Mail
- Inventiamo una lista di email a nostro piacimento
- Chiediamo all'utente una mail (con un prompt)
- controlliamo che la mail inserita sia presente nella lista
- se è presente, gli diamo il benvenuto. (in console)
- altrimenti gli diciamo che non può accedere (in console)
:avviso:non potete usare il metodo .includes())!!!
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare (in console)
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima la scaletta in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS:
- Nell'esercizio mail, raccogliamo la mail dell'utente con un input e facciamo la verifica al click del bottone
- Nell'esercizio dadi, mettiamo un tasto "Gioca" ed eseguiamo la logica di gioco al click del bottone
- stampiamo i risultati di entrambi gli esercizi in pagina
  -->

# Mail
## Fase preliminare
- Creare un array di email - `mailList`.
- Chiedere all'utente una mail - `userInput`.
## Svolgimento
- **PER** Ogni elemento nell'array `mailList`:
    - **SE** il valore dell'elemento è uguale a `userInput` stampa: *Benvenuto*.
    - **ALTRIMENTI** stampa: *Non hai accesso!*.

<br>

# Gioco dei Dadi
## Fase preliminare
- Creare un Array in cui salvare i numeri dell'utente `numbersGeneratedUser`.
- Creare un Array in cui salvare i numeri della CPU `numbersGeneratedCPU`.
- Creare una variabile `let sumUser`
- Creare una variabile `let sumCPU`
## Svolgimento
- Generare 2 numeri random per l'utente e salvarli nell'array `numbersGeneratedUser`.
- Generare 2 numeri random per la CPU e salvarli nell'array `numbersGeneratedCPU`.
- **PER  OGNI** elemento nell'array `numbersGeneratedUser`
    - Ogni ciclo somma il valore dell'elemento e lo salva in `sumUser`.
- **PER  OGNI** elemento nell'array `numbersGeneratedCPU`.
    - Ogni ciclo somma il valore dell'elemento e lo salva in `sumCPU`.
- **SE** `sumUser` è maggiore di `sumCPU`:
    - Stampa: *Ha vinto l'utente!*
- **ALTRIMENTI** Stampa: *Ha vinto il computer!*