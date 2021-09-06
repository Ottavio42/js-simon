function numeroCasuale(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var memory = [];
while(memory.length < 5){
    var memoryRan = numeroCasuale(1, 100);
    if(memory.indexOf(memoryRan) === -1){
        memory.push(memoryRan);
    } 
};

alert("I numeri da memorizzare sono : " + memory);

var numeriUtente= [];
var numeriUguali = [];
var attesa = 0 ;
var intervallo = setInterval(
    function(){
        attesa++;
        if(attesa == 2){
            clearInterval(intervallo);

            for (var i = 0; i < 5; i++) {
                 numeriUtente.push(parseInt(prompt("Scrivi un numero che ti ricordi :")));
            }
            for (var i = 0; i < 5; i++){
                if(memory.includes(numeriUtente[i])){
                        numeriUguali.push(numeriUtente[i]);   
                    }
                }
                if(numeriUguali.length != 0){
                    alert("hai indovinato i numeri: " + numeriUguali)
                }
                else{
                    alert("Non hai indvinato nemmeno un numero, Capra! Ricarica la pagina e riprova!")
                }
        }

    }, 1000
);

