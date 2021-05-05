/* VARIABLES */
const allNumber = document.querySelectorAll('button[data-button="number"]');
const allOperator = document.querySelectorAll('button[data-button="operator"]');
const cancelBtn = document.querySelector('button[data-button="cancel"]');
const equalBtn = document.querySelector('button[data-button="equal"]') ;
const calcDetail = document.getElementById("calcDetail");
const result = document.getElementById("result");


/* INSTRUCTIONS */
allNumber.forEach(element => {
    element.addEventListener("click", function() {
        // console.log(this.innerHTML);
        calcDetail.innerHTML += this.innerHTML;
    });
});

allOperator.forEach(element => {
    element.addEventListener("click", function() {
        // console.log(this.innerHTML);
        calcDetail.innerHTML += this.dataset.op;
    });
});

equalBtn.addEventListener("click", () => {
    // console.log(calcDetail);
    result.innerHTML = eval(calcDetail.innerHTML);
});

// Touche C : supprime tout ce qu'on a entré
cancelBtn.addEventListener("click", () => {
    calcDetail.innerHTML = "";
    result.innerHTML = "";
});