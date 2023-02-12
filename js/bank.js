
// deposit button event 
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositField = document.getElementById('deposit');
    const deposit = depositField.value ;
    
    const currentDeposit = parseFloat(deposit);
    
    
// console.log( depositInBank);

    const depositIn =document.getElementById('deposit-bank') ;
    const depositInBank = depositIn.innerText

    const currentDepositInBank= parseFloat(depositInBank);

    const totalDeposit= currentDeposit + currentDepositInBank;

    depositIn.innerText = totalDeposit ; 


    const balance=document.getElementById('balance');
     const balanceBank = balance.innerText;
     const currentBalance = parseFloat(balanceBank);

     const totalBalance = currentBalance + currentDeposit ;

     balance.innerText=totalBalance;


    depositField.value = ''

})

// withdraw button event 

document.getElementById('withdraw-btn').addEventListener('click',function(){
const withdraw = document.getElementById('withdraw')
const withdrawField = withdraw.value ;
const currentWithdraw = parseFloat(withdrawField)


const withdrawIn = document.getElementById('withdraw-bank')
const withdrawBank = withdrawIn.innerText
const currentWithdrawBank =parseFloat(withdrawBank)

const totalWithdraw = currentWithdraw + currentWithdrawBank 



const balance=document.getElementById('balance');
     const balanceBank = balance.innerText;
     const currentBalance = parseFloat(balanceBank);

     const totalBalance = currentBalance - currentWithdraw ;

     if(currentBalance >= currentWithdraw ) {
         balance.innerText=totalBalance;
         withdrawIn.innerText = totalWithdraw ;
     }
     else if(currentWithdraw ===' ') {
           alert ('please enter your withdraw amount')
     }
     else {
           alert ('you do not have enough money')
     }

    
     withdraw.value = ''

})