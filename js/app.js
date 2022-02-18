document.getElementById('calculate-btn').addEventListener('click', function(){ 
    let income= document.getElementById('input-box');
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
    // error hide
    document.getElementById('income-error').style.display = 'none';
    document.getElementById('negativenum-error').style.display = 'none';
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
})


//  document.getElementById('calculate-btn').addEventListener('click', function (){    
//     let income= document.getElementById('input-box');
//      let incomeValue = parseFloat(income.value);
//      let food = document.getElementById('food-box');
//      let foodValue = parseFloat(food.value);
//     let rent = document.getElementById('cloth-box');
//     let rentValue = parseFloat(rent.value);
//      let cloth = document.getElementById('cloth-box');
//     let clothValue = parseFloat(cloth.value);
    
//     let totalBalacne= foodValue + rentValue + clothValue;
//     let totalExpenses = document.getElementById('total-expenses');
//     totalExpenses.innerText = totalBalacne;

//     let Balance = document.getElementById('balance');
//     // let BalanceValue = parseFloat(Balance.value);
//     const meinBalance =      



//  })