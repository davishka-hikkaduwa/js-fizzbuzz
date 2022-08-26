console.log("js OK!");



const containerHTMLElement = document.getElementById("container");

//ciclare i numeri
for (let number = 1; number <= 100; number++) {
    /* versione funzionante_1
    console.log(number);

    let text = number;                   // inizializzo text con il numero

    if (number % 3 === 0 && number % 5 === 0) {     //stampa FizzBuzz se divisibile per 3 e 5
        // console.log("FizzBuzz");
        text = "FizzBuzz";
    } else if (number % 3 === 0) {               //stampa fizz se divisibile per 3
        // console.log("Fizz");
        text = "Fizz";
    } else if (number % 5 === 0) {          //stampa buzz se divisibile per 5
        // console.log("Buzz");
        text = "Buzz";
    } else {                            //stampa numero se non divisibile nè per 3 e 5
        // console.log(number);
        text = number;
    }

}
*/

    let text = "";
    if (number % 3 === 0) {
        text += "Fizz";
    }

    if (number % 5 === 0) {
        text += "Buzz";
    }

    //stampo number se text non ha contenuto ***
    /*if (text.length > 0) {
        console.log(text);
    } else {
        console.log(number);
    }*/

    // e uguale all' if sopra con i *** --> condizione ? se vero : se falso 
    const result = text.length > 0 ? text : number;
    console.log(result);


    //BONUS_1 - creo elementi
    const element = document.createElement("div");

    element.className = "square"
    if (text.length > 0) {
        element.classList.add(text);
    }



    element.append(result);         //è analogo a scriver element.innerHTML = result

    containerHTMLElement.append(element);

    //BONUS_2 - style elementi


}




// console.log(text);





