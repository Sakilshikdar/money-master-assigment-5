document.getElementById('calculate-btn').addEventListener('click',function(){
    const foodBox = document.getElementById('food-box').value;
    const rentBox = document.getElementById('rent-box').value
    const clothBox = document.getElementById('cloth-box').value
    
    const totalPrice = parseFloat('food-box') + parseFloat('rent-box') + parseFloat ('cloth-box')
    const totalExpense = document.getElementById('total-expense')
    totalExpense.innertext = totalPrice;  
})
  

