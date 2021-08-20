function updateCaseNumber(isIncreasing , elementName) {
        const caseInput = document.getElementById(`${elementName}-number`);
        let caseNumber = caseInput.value;
        if(isIncreasing) {
            caseNumber = parseInt(caseInput.value) + 1;
        } else if (caseNumber > 0) {
            caseNumber = parseInt(caseInput.value) - 1;
        }
        caseInput.value = caseNumber;
        // Calculate case total
        const caseTotal = document.getElementById(`${elementName}-total`);
        console.log(caseTotal)
        caseTotal.innerText = caseNumber * 59;

    }

document.getElementById('case-plus').addEventListener('click' , function() {
    updateCaseNumber(true , 'case');
    calculateTotal()
});

document.getElementById('case-minus').addEventListener('click' , function() {
    updateCaseNumber(false, 'case') ;
    calculateTotal()
});


document.getElementById('phone-plus').addEventListener('click' , function() {
    updateCaseNumber(true , 'phone');
    calculateTotal()
});

document.getElementById('phone-minus').addEventListener('click' , function() {
    updateCaseNumber(false , 'phone');
    calculateTotal()
});

function calculateTotal() {
    let caseTotal = document.getElementById('case-total');
    let phoneTotal = document.getElementById('phone-total');
    let subTotal = document.getElementById('total');
    let tax = document.getElementById('tax');
    tax.innerText = 10;
    console.log(subTotal);

    subTotal.innerText = parseInt(phoneTotal.innerText) + parseInt(caseTotal.innerText);
    let total = document.getElementById('total');
}





