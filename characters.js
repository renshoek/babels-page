function makeString(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz.,';
    var charactersLength = characters.length;

    //Array met bestaande woorden. Voeg nieuwe woorden toe met quotation marks en komma's
    var wordArray = ['&nbsp;'];
    for (var i = 0; i < length; i++) {

        //Genereer een willekeurig getal tussen 0 en 10 (vervang 10 voor wat je wilt)
        var randomNum = Math.floor(Math.random() * 28);

        //Als het willekeurige getal 1 is, voeg je een bestaand woord toe
        if (randomNum == 1) {

            //Voeg een willekeurig woord uit de array toe
            //Hij kiest in de array uit het eerste item, laatste item en alles daartussen
            result += wordArray[Math.floor(Math.random() * wordArray.length)];
        } else {
            //Als het willekeurige getal (randomNum) niet goed is dan doet hij ONZIN
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
    }
    return result;
}

document.getElementById("button").addEventListener("click", function () {
    document.getElementById("babel").innerHTML = makeString(3200);
});;