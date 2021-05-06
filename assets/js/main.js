/* VARIABLES */
const allNumber = document.querySelectorAll('button[data-button="number"]');
const allOperator = document.querySelectorAll('button[data-button="operator"]');
const cancelBtn = document.querySelector('button[data-button="cancel"]');
const equalBtn = document.querySelector('button[data-button="equal"]') ;
const comma = document.querySelector('button[data-button="comma"]');

/* INSTRUCTIONS */
allNumber.forEach(element => {
    element.addEventListener("click", function() {
        calcDetail.innerHTML += this.innerHTML;
    });
});

allOperator.forEach(element => {
    element.addEventListener("click", function() {
        calcDetail.innerHTML += this.dataset.op;
    });
});

comma.addEventListener("click", function() {
    calcDetail.innerHTML += this.dataset.op;
});

equalBtn.addEventListener("click", () => {
    equalSign.innerHTML = "=";
    result.innerHTML = eval(calcDetail.innerHTML);
});

// Touche C : supprime tout ce qu'on a entré
cancelBtn.addEventListener("click", () => {
    calcDetail.innerHTML = "";
    equalSign.innerHTML = "";
    result.innerHTML = "";
});