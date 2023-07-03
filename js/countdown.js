var countDownDate = new Date("Jun 21, 2023 08:30:00").getTime(); //Crea una variabile di tipo 'Date' su cui calcolare il countdown
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var giorni = Math.floor(distance / (1000 * 60 * 60 * 24));
    var ore = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minuti = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var secondi = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = giorni + "g " + ore + "h " + minuti + "m " + secondi + "s "; //sostituisce il contenuto di <p id="countdown"></p>
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "0 giorni, buona fortuna!";
    }
}, 1000);