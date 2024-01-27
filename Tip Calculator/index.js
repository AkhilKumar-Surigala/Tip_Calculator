let billAmountElement = document.getElementById('billAmount');
let percentageTipElement = document.getElementById('percentageTip');
let tipAmountElement = document.getElementById('tipAmount');
let totalAmountElement = document.getElementById('totalAmount');
let errorMessageElement = document.getElementById('errorMessage');

function calculateTip(){
    let billAmountInputValue = billAmountElement.value;
    let percentageTipInputValue = percentageTipElement.value;


    if (billAmountInputValue === "") {
        errorMessageElement.textContent = "Please Enter Valid Input";
    } else if (percentageTipInputValue === "") {
        errorMessageElement.textContent = "Please Enter Valid Input";
    } else if (billAmountElement === "" & percentageTipInputValue === "") {
        errorMessageElement.textContent = "Please Enter Valid Input";
    } else {
        errorMessageElement.textContent = "";
        let billAmount = parseInt(billAmountInputValue);
        let percentageTip = parseInt(percentageTipInputValue);

        let calculatedTip = (percentageTip / 100) * billAmount;
        let calculatedTotal = billAmount + calculatedTip;


        tipAmountElement.value = calculatedTip;
        totalAmountElement.value = calculatedTotal;
    }
}