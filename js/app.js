// function call
document.getElementById('calculate-btn').addEventListener('click', function(){ 
    let income = document.getElementById('input-box');
    let incomeValue = parseFloat(income.value);
    let food = document.getElementById('food-box');
    let foodValue = parseFloat(food.value);
    let rent = document.getElementById('cloth-box');
    let rentValue = parseFloat(rent.value);
    let cloth = document.getElementById('cloth-box');
    let clothValue = parseFloat(cloth.value);

// show error     
if (incomeValue > 0 && foodValue >0 && rentValue >0 && clothValue > 0) {
let expensesMoney = foodValue + rentValue + clothValue;
if (incomeValue > expensesMoney){
    document.getElementById('total-expenses').innerText = expensesMoney;
    let balance = incomeValue - expensesMoney;
    document.getElementById('balance').innerText = balance;

 }
// show expenditure is more error
    else{
        document.getElementById('income-error').style.display = 'block';
    }
}
// negative
else{
    document.getElementById('negativenum-error').style.display = 'block';
} 
});


document.getElementById('save-btn').addEventListener('click', function(event) {
    event.preventDefault()
    const saveInput = document.getElementById('save-box');
    const saveText = saveInput.value;
    const saveTextAmount = parseFloat(saveText);
    saveInput.value = ''
//   Income amount
    const incomeInput = document.getElementById('input-box')
    const newIncomeInputText = incomeInput.value;
    const newIncome = parseFloat(newIncomeInputText)
// saving amount
    const savingTotal = document.getElementById('saving-amount');
    const savingTotalText = savingTotal.innerText;
    const savingTotalAmount = parseFloat(savingTotalText);
    const save = (newIncome * saveTextAmount) / 100;
// condition.........    
    if(save < newIncome){
        savingTotal.innerText = save;
    }
    else{
        const savingError = document.getElementById('saveing-error');
        savingError.style.display = 'block'
        
    }
    const remaingBalanceTotal = document.getElementById('remaining-balance');
    const remaingBalanceTotalText = remaingBalanceTotal.innerText;
    const remaingBalanceTotalTextAmount = parseFloat(remaingBalanceTotalText);
    const remainBalance =   save- remaingBalanceTotalTextAmount;
//condition....
  if(remainBalance >= 0){
    
    remaingBalanceTotal.innerText = remainBalance;

    savingTotalAmount.value = '';
  }
  else{
    const savingError = document.getElementById('saveing-error');
    savingError.style.display = 'block'
    
}
});