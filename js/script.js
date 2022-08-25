console.log("js OK!");

const grid = document.getElementById("grid");

for (let squareIndex = 1; squareIndex <= 100; squareIndex++) {
    const element = document.createElement("div");

    element.append(squareIndex.toFixed());

    const gridNumber = element.value;

    function isDivisibleBy3(gridNumber) {
        if ((gridNumber % 3) == 0) {
            // const message = "FIZZ";
            // messageHTMLElement.innerHTML =
        } else if ((gridNumber % 5) == 0) {
            return "BUZZ";
        } else if (((gridNumber % 3) == 0) && ((gridNumber % 5) == 0)) {
            return "FIZZBUZZ";
        } else {
            return gridNumber;
        }
    }



    grid.append(element);
}
