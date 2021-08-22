function getInputValue(inputFildId) {
    const inputField = document.getElementById(inputFildId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
}


function updateTotal(fieldId, amount) {
    const totalTag = document.getElementById(fieldId);
    const totalTagValue = parseFloat(totalTag.innerText);
    const newTotal = totalTagValue + amount;
    totalTag.innerText = newTotal;
    // return newTotal;

}

function getInnerText(fieldId) {
    const fieldtag = document.getElementById(fieldId);
    const fieldValue = parseFloat(fieldtag.innerText);
    return fieldValue;
}


// Update Total Balance 
function updateBalance(amount, isAdding) {
    const balanceTag = document.getElementById('balance-total');
    const balanceTagValue = parseFloat(balanceTag.innerText);



    // one way to set condition

    // if (isAdding == true) {
    //     const newBalance = balanceTagValue + amount;
    //     balanceTag.innerText = newBalance;
    // }
    // else {
    //     const newBalance = balanceTagValue - amount;
    //     balanceTag.innerText = newBalance;
    // }


    let newBalance;
    if (isAdding == true) {
        newBalance = balanceTagValue + amount;
    }
    else {
        newBalance = balanceTagValue - amount;
    }

    balanceTag.innerText = newBalance;



}




document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    //console.log(amount);
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
})


// update withdraw


document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerText('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
})