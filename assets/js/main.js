const allNumber = document.querySelectorAll('button[data-button="number"]');
const allOperator = document.querySelectorAll('button[data-button="operator"]');
const cancelBtn = document.querySelector('button[data-button="cancel"]');
const equalBtn = document.querySelector('button[data-button="equal"]') ;
const comma = document.querySelector('button[data-button="comma"]');

allNumber.forEach(element => {
    element.addEventListener("click", function() {
        calcDetail.innerText += this.innerText;
		allOperator.forEach(element => {
			element.disabled = false;
		});
    });
});

allOperator.forEach(element => {
    element.addEventListener("click", function() {
        calcDetail.innerText += this.dataset.op;
		allOperator.forEach(element => {
			element.disabled = true;
		});
    });
});

comma.addEventListener("click", function() {
    calcDetail.innerText += this.dataset.op;
});

equalBtn.addEventListener("click", function() {
    equalSign.innerText = "=";
    result.innerText = eval(calcDetail.innerText);
});

cancelBtn.addEventListener("click", function() {
    calcDetail.innerText = "";
    equalSign.innerText = "";
    result.innerText = "";
	allOperator.forEach(element => {
		element.disabled = false;
	});
});