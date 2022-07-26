let counterHTML = document.getElementById("counterId");
console.log(counterHTML);
let totalCount = 0;

function increaseCount() {
    totalCount +=1;
    counterHTML.textContext = totalCount;
}

function decreaseCount() {
    totalCount--;
    counterHTML.textContext = totalCount;
}

function resetCount() {
    totalCount = 0;
    counterHTML.textContext = totalCount;
}
