let result = document.getElementById("result");
console.log(result);
let counter = "";
let i = 0;
function sequenceNumbers() {
    let number = document.getElementById("numberId").value;

    let increase = document.getElementById("increaseId").value;

    let max = parseInt(increase) + parseInt(number) + 1;

    for(i = ++number; i < max; i++) {
        counter += i;
        counter += " ";
    }
    result.textContent = counter;
}