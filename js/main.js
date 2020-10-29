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

    
    console.log('Prova time');
    alert("Prova");

  }, 2000);





});


// FUNZIONI
function computerRandNumber(min, max) {
  var random = Math.floor( Math.random() * max - min + 1) + min;

  return random;
}
