/*
SOMON SAYS : MEMORY
Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l'utente deve inserire, un prompt alla volta,
i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
*/

$(document).ready( function () {

  var listNum = [];
  var size = 5;

  while (listNum.length < size ) {
    var number = computerRandNumber(1, 10);

    if (! listNum.includes(number)) {
      listNum.push(number);
    }
  }
  console.log('Numeri da ricordare: ' + listNum);
  alert('Memorizza questi cinque numeri: \n' + listNum);

  // intervallo 30 secondi
  setTimeout(function() {

    // numeri che inserisce l'utente
   var userNum;
   var listUserNum = [];

   while (listUserNum.length < size) {
     userNum = parseInt(prompt('Inserisci un numero della lista che hai visto'));
     console.log(userNum);

      if (! listUserNum.includes(userNum)) {
        listUserNum.push(userNum);
    }
  }

   console.log('I numeri che ricordi sono: ' + listUserNum);

  }, 2000);





});


// FUNZIONI
function computerRandNumber(min, max) {
  var random = Math.floor( Math.random() * max - min + 1) + min;

  return random;
}
