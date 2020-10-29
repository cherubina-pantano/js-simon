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

  // console.log('Numeri da ricordare: ' + listNum);
  alert('Memorizza questi cinque numeri: \n' + listNum);

  // intervallo 30 secondi
  setTimeout(function() {

    // numeri che inserisce l'utente
   var userNum;
   var listUserNum = [];


   while (listUserNum.length < size) {
     userNum = parseInt(prompt('Inserisci un numero della lista che hai visto').trim() );
     console.log(userNum);

      if (! listUserNum.includes(userNum)) {
        listUserNum.push(userNum);

    }
  }

  console.log('I numeri che ricordi sono: ' + listUserNum);
   var control = [];

   for (var i  = 0; i < listUserNum.length; i++) {

      if (listNum.includes(listUserNum[i]) ) {
        control.push(listUserNum[i]);
      }
    }

    if (control.length == 0) {
      console.log('Hai perso! Non hai ricordato nessun numero!');
      alert('Hai perso! Non hai ricordato nessun numero!')
      alert('I numeri che hai indovinato sono: ' + control);

    }
    else if (control.length == 5) {
      console.log('Hai vinto! Hai indovinato tutti i numeri!');
      alert('Hai vinto! Hai indovinato tutti i numeri!');
      alert('I numeri che hai indovinato sono: ' + control);

    }
    else {
      console.log('Peccato! Hai indovitato solo: ' + control.length + ' su ' + size);
      alert('Peccato! Hai indovitato solo: ' + control.length + ' numeri ' + ' su ' + size);
      alert('I numeri che hai indovinato sono: ' + control);

    }

    // alert('I numeri che hai indovinato sono: ' + control);

  }, 30000);

});


// FUNZIONI
function computerRandNumber(min, max) {
  var random = Math.floor( Math.random() * max - min + 1) + min;

  return random;
}
